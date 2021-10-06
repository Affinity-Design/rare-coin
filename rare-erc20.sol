pragma solidity >=0.6.0 <0.8.0;
// SPDX-License-Identifier: MIT

contract RareToken {
   //-------------------Storage----------------------------      
    address payable private manager; 
    string public name;
    string public symbol;
    uint public totalSupply;
    uint8 public decimals;
    
   //-------------------Mappings---------------------------    
    mapping(address => uint) public balanceOf;
    mapping(address => mapping(address => uint)) public allowance;
   
   //-------------------Events-----------------------------      
    event Transfer(address indexed _from, address indexed _to, uint _value); 
    event Approval(address indexed _owner, address indexed _spender, uint _value); 
   
   //-------------------Contructor------------------------- 
    constructor (address _ftnAddress) {
        name = "Rare Coin v2";
        symbol = "RARE";
        totalSupply = 36500000000000000000000;
        decimals = 18;
        balanceOf[_ftnAddress] = totalSupply;    
        manager = msg.sender;
    }
  
   //-------------------Public Functions-------------------  
   
   // transfer fuction 
    function transfer(address _to, uint _value) public returns (bool){
         // makes sure that user is not sending more then they have, if they try it fails 
        require(balanceOf[msg.sender] >= _value, "Not enough tokens in account");
         // makes sure amout being sent is greater then recipients starting balance
        assert(balanceOf[_to] + _value >= balanceOf[_to]);
         // makes sure amout being deducted is less then senders starting balance
        assert(balanceOf[msg.sender] - _value <= balanceOf[msg.sender]);
         // removes balance from sender
        balanceOf[msg.sender] -= _value;
         // incresses balance of recipient 
        balanceOf[_to] += _value;
         // creates a transfer event, returns arguments as an event 
        emit Transfer(msg.sender, _to, _value);
         // returns true if succesful 
        return true; 
    }
    
   // approve fuction 
    function approve(address _spender, uint _value) public returns (bool) {
         // makes sure that user is not allowing more then they have, if they try it fails *TODO test --------------
        require(balanceOf[msg.sender] >= _value, "Not enough tokens in account");
         // regester a _spender to send up to the _value spessified on regesters behalf 
        allowance[msg.sender][_spender] = _value; 
         // creates a approve event, returns arguments as an event   
        emit Approval(msg.sender, _spender, _value);
         // returns true if succesful 
        return true;         
    }

   // TransferFrom fuction 
    function transferFrom(address _from, address _to, uint _value) public returns (bool) {
         // makes sure that user has enough tokens to transfer, if notit fails 
        require(_value <= balanceOf[_from], "Over allocated amount");
         // makes sure that user is not spending more then they are allowed, if they try it fails         
        require(_value <= allowance[_from][msg.sender], "Over allocated amount");        

          // makes sure amout being sent is greater then recipients starting balance
        assert(balanceOf[_to] + _value >= balanceOf[_to]);
         // makes sure amout being deducted is less then senders starting balance
        assert(balanceOf[_from] - _value <= balanceOf[_from]);       
         // removes balance from sender
        balanceOf[_from] -= _value;
         // incresses balance of recipient 
        balanceOf[_to] += _value;
        
         // makes sure ammout being deducted is less then allowance starting balance
        assert(allowance[_from][msg.sender] - _value <= allowance[_from][msg.sender]);      
         // decresses balance from allowance value
        allowance[_from][msg.sender] -= _value; 
        
         // creates a transfer event, returns arguments as an event 
        emit Transfer(_from, _to, _value);
          // returns true if succesful 
        return true;        
    }   
    
    
    // #sets Name Of Token, only manager
    function setName(string memory _name) public restricted {
        name = _name;
    }
    
    // #sets symbol of Token, only manager
    function setSymbol(string memory _symbol) public restricted {
        symbol = _symbol;
    }   
    
    
    // *creates a restricted fuction unless you are the manager
    modifier restricted() {
        require(msg.sender == manager, "Only the manager can perfom this fuction");
        _;
    }
    
    
//-- end of contract --
}
