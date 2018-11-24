var Global = {
    isOnline: false,
    checkingOnline: false,
    parseClassTable: false,
    cookie: "",
    loginInfo: {
        j_username: "",
        j_password: ""
    },
    currentStuName: "",
    userId: "",
    startDate: "",
    termName: "",
    weekLength: "",
    defRes: {
        adcId: "",
        campus: "",
        department: "",
        personId: "",
        school: "",
        schType: "",
        teachingTerm: "",
        term_a: "",
        term_l: "",
        term_s: "",
        university: "",
        year: ""
    },
    defColor: [
        "#fdad8b",
        "#90daa3",
        "#93adea",
        "#6cc2e6",
        "#a0d462",
        "#ea98b5",
        "#7fc2ad",
        "#b6a4db",
        "#f6a1a1",
        "#93c6ea"
    ],
    tips: {},
    classTable: [],
    card: {
        isOnline: false,
        username: "",
        password: ""
    }
};

export default Global;
