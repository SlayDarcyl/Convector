// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MyContract {
    struct Item {
        uint id;
        string name;
        bool isActive;
    }

    mapping(uint => Item) public items;
    uint public itemCount;

    event ItemCreated(uint id, string name);
    event ItemUpdated(uint id, string name, bool isActive);

    function createItem(string memory _name) public {
        itemCount++;
        items[itemCount] = Item(itemCount, _name, true);
        emit ItemCreated(itemCount, _name);
    }

    function updateItem(uint _id, string memory _name, bool _isActive) public {
        require(_id > 0 && _id <= itemCount, "Item ID is invalid");
        items[_id].name = _name;
        items[_id].isActive = _isActive;
        emit ItemUpdated(_id, _name, _isActive);
    }

    function getItem(uint _id) public view returns (Item memory) {
        require(_id > 0 && _id <= itemCount, "Item ID is invalid");
        return items[_id];
    }
}
