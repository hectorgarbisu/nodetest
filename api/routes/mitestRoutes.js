'use strict';
module.exports = (app) => {
  var mitestController = require('../controllers/mitestController');

  // todoList Routes

  app.route('/')
  .get(mitestController.main_page)

  app.route('/admin')
    .get(mitestController.admin_page)
  app.route('/tasks')
    .get(mitestController.list_all_tasks)
    .post(mitestController.create_a_task);

  app.route('/tasks/:taskId')
    .get(mitestController.read_a_task)
    .put(mitestController.update_a_task)
    .delete(mitestController.delete_a_task);
};
