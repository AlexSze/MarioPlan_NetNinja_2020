const initstate = {
    projects: [
      ]
}

const projectreducer = (state=initstate, action)=>{
    switch(action.type){
        case 'CREATE_PROJECT':
            console.log('create project', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log(action.err);
            return state;

        default:
            return state;
    }
}

export default projectreducer