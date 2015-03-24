'use strict';

angular.module('TheListApp.lists')

.factory('Lists', function() {
    var lists = [
        {
            name:"Italian Cars",
            items : ['Ferrari', 'Fiat', 'Lamborghini', 'Maserati']
        },
        {
            name:"Exotic Fruits",
            items : ['Banana', 'Pineapple']
        },
        {
            name:"Programming Languages",
            items : ['C', 'Scala', 'JavaScript']
        }
    ];
    return {
        getLists: function() {
            return lists;
        }
    };
});