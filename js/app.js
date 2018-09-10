window.onload = function () {

    let tasksArray = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];

    new Vue({
        el: '#app',
        data: {
            newTask: '',
            tasks: tasksArray
        },
        methods: {
            addTask: function () {
                var text = this.newTask.trim()
                if (text !== "") {
                    this.tasks.push({ text: text, status: false })
                    this.newTask = ''
                }
            },
            removeTask: function (index) {
                this.tasks.splice(index, 1)
            },
            updateTask: function (index, e) {
                var text = e.target.value.trim()

                if (text !== "") {
                    Vue.set(this.tasks, index, { text: text, status: this.tasks[index].status })
                    e.target.value = '';
                }
            },
            markAsDone: function (index) {
                Vue.set(this.tasks, index, { text: this.tasks[index].text, status: true })
            },
            cleanTasks: function () {
                this.tasks = [];
            }
        },
        watch: {
            tasks: function () {
                localStorage.setItem('tasks', JSON.stringify(this.tasks));
            }
        }
    })
}