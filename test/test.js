var assert = require('assert');
const { isRegExp } = require('util/types');
describe('Array', function () {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            assert.equal([1, 2, 3].indexOf(4), -1);
        });
    });
}) ;



//addTask
describe('addTask', () => {
    it('assigns the arguments to the task object keys', () => {

    });
    it('pushes the task object to the TaskManager task array', () => {

    });
});



//deleteTask
describe('deleteTask', () => {
    describe('for loop', () => {
        it('assigns each element in this.task array to task variable', () => {

        });
        it('pushes the task to a newTasks array if the id of the task does not match taskId parameter', () => {

        });
    });
    it('returns a new array with the taskId task removed and assigns new array to this.task', () => {

    });
});



//getTaskById
describe('getTaskById', () => {
    describe('for loop', () => {
        it('assigns each element in task array to const task', () => {

        });
        it('checks if id of each element matches taskId input and assigns matching task to variable foundTask', () => {

        });
    });
    it('returns the found task', () => {

    });
});




//TaskManager constructor