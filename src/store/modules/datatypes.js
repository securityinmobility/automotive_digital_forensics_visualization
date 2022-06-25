const state = {
    datatype: "",
    carmodel: "",
    context: "",
    radius1: "100",
    radius2: "140",
    contextOptions: ["Accident (Question of guilt)", "Theft"],
    carmodelOptions: ["Tesla Model 3 (2015)"],
};

const getters = {
    allDatatypes: (state) => state.datatype,
    getCarmodel: (state) => state.carmodel,
    getContext: (state) => state.context,
    getRadius1: (state) => state.radius1,
    getRadius2: (state) => state.radius2,
    getContextOptions: (state) => state.contextOptions,
    getCarmodelOptions: (state) => state.carmodelOptions,
};

const actions = {};

const mutations = {
    setDatatype: (state, datatype) => (state.datatype = datatype),
    setContext: (state, context) => (state.context = context),
    setCarmodel: (state, carmodel) => (state.carmodel = carmodel),
};

export default {
    state,
    getters,
    actions,
    mutations
};