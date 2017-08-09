new Vue({
  el: '#app',
  data: {
    newTask: '',
    tasks: [],
    disable: {
      'disabled': true
    }
  },
  computed: {
    basiStyleH1: function() {
      return [{'padding-bottom': '15px', 'text-decoration': 'underline'}];
    },
    pendingTasks: function() {
      return this.tasks.filter(function(item) {
        return item.pending;
      });
    },
    cursorStyle: function() {
      return [{'cursor': 'pointer'}];
    },
    validateNameTarea: function() {
      var val = this.newTask.trim();

      if(val == '') {
        return 'El nombre es obigatorio y requerido.';
      }

      if(val.length < 5) {
        return 'El nombre de la tarea debe ser mayor a 5 caracteres.';
      }
    },
    nameFieldClasses: function() {
      return ['form-group', {'has-error': this.validateNameTarea}];
    }
  },
  methods: {
    createTask: function(e, p) {
      e.preventDefault();

      if(this.disable['disabled'] == false) {
        this.tasks.push({
          task: this.newTask,
          pending: p
        });

        this.newTask = '';
        this.disable['disabled'] = true;
      }
    },
    cambiarEstado: function(a, p) {
      if(p == true) {
        this.tasks[a].pending = false;
      } else {
        this.tasks[a].pending = true;
      }
    },
    inputState: function() {
      if(this.newTask.length >= 5 && this.newTask.trim() != '') {
        this.disable['disabled'] = false;
      } else {
        this.disable['disabled'] = true;
      }
    }
  }
});