import axios from 'axios';

export default{
  state: {
    tasks: []
  },
  getters: {
    allTasks: state => state.tasks
  },
  mutations: {
    setTasks: ( state, tasks ) => state.tasks = tasks,
    createTask: ( state, task ) => state.tasks.unshift(task),
    updateTask: ( state, updateTask ) =>  {
           const index = state.tasks.findIndex( task => task.id === updateTask.id )
           if( index !== -1 ) {
             state.tasks.splice(index, 1, updateTask);
           }
         },
    removeTask: ( state, id ) => state.tasks = state.tasks.filter( task => task.id !== id )
  },
  actions: {
    async fetchTasks({ commit }) {
      const response = await axios.get('https://tcc-api-crud.herokuapp.com/api/tasks/desc');
      commit('setTasks', response.data);
    },
    async addTask({ commit }, task) {
      const response = await axios.post('https://tcc-api-crud.herokuapp.com/api/task', task);
      commit('createTask', response.data);
    },
    async updateTask({ commit }, task) {
      const response = await axios.put(`https://tcc-api-crud.herokuapp.com/api/task/${task.id}`, task);
      commit('updateTask', response.data);
    },
    async removeTask({ commit }, id) {
      await axios.delete(`https://tcc-api-crud.herokuapp.com/api/task/${id}`);
      commit('removeTask', id);
    },
  }
}