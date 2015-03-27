# Workshop AngularJS

## Getting started
- Install Node.js [Node.js][node].
- Check out the source code for the workshop from [GitHub][github].
- Follow the steps in the section `Getting started` in the README.md file. Do not checkout the angular-seed project but use the project you checked out in the previous step.

### Development Environments

#### Eclipse

- Installera Eclipse IDE for Java EE Developers
- Installera plugin Angular Eclipse 0.8.0
- Öppna Git-perspektivet.
- Klona https://github.com/hrmsoftware/AngularJS.git
- Högerklicka på repositoryt i vyn Git Repositories och välj Import Projects...
    - Importera som General Project
- Högerklicka på det nya projektet
    - Välj Configure -> Convert to AngularJS Project
- Öppna Properties för projektet
    - Öppna Tern -> Script Paths
	- Välj Add Folder
	- Lägg till app
- Öppna vyn Angular Explorer
    - Öppna filen app/controllers/lists.js
	- Bläddra bland filer och moduler i ditt projekt.
- Rock'n'Roll

#### Sublime Text

-

#### IntelliJ IDEA

-

## Tutorial

### Add new list

1. Add new list
    1. Create a method `addList(name)` in ListsCtrl
    1. Let the method's implementation be `alert(name);`
    1. Create a label "New List"
    1. Create a text input element with `id="new_list_input"`
    1. Let the input element have `ng-model="newlist"`
    1. Create a button labeled "Add"
    1. Let the button have `ng-click="addList(newlist)"`
    1. Try it out by running `npm start`
1. Store new list
    1. Change the implementation of the method `addList(name)` to
    ```
        Lists.addList(name);
        $scope.lists = Lists.getLists();
    ```
    1. Add a method in the Lists factory `addList(name)` with the following implementation
    ```
        return $scope.lists[$routeParams.listid];
    ```
    1. Try it out by running `npm start`
1. Test the new functionality
    1. Uncomment the tests described as `tutorial` in `test/controllers/lists_test.js`
    1. Run the unit tests with `npm run test-single-run`

### List items
We want to list all items in a list. Make the list clickable and list all items below the sequence of lists.

1. We need to uniquely identify each list
    1. Add property `id` to all lists in the List factory. The value should be the lists index in the array.
1. Create a link for each list.
    1. Create an a-tag for each list with `href="#/lists/{{list.id}}"`, where `list.id` is the id-property of the lists in `Lists`-factory.
1. Create a method that returns the selected list
    1. The router specification matches on `listid` as an argument in the path, if it exists.
    1. Create a method `getList()` in `ListsCtrl` with the following implementation `return $scope.lists[$routeParams.listid];`.
1. Create an `<ul>` in `lists.html` below the sequence of lists. The `<ul>` should contain the items of the selected list.

## Assignment
Please experiment yourselves with current use-cases.

1. Add item to list
1. Remove item from list
1. Remove list

[node]: https://www.node.js
[github]: http://www.github.com/hrmsoftware/workshop/angularjs
