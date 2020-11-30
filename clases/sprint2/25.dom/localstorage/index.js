const jsonButtonOnClick = () => {
    const jsonTest = loadJsonTest();
    alert(JSON.stringify(jsonTest));
};

const localStorageOnClick = () => {
    const jsonTest = loadJsonTest();
    localStorage.setItem("JsonTest", JSON.stringify(jsonTest));
    alert("Show the application section in the devtools");
};

const showDataLocalStorage = () => {
    const jsonInfo = localStorage.getItem("JsonTest");
    alert(jsonInfo);
};

const deleteDataLocalStorage = () => {
    localStorage.removeItem("JsonTest");
    alert("JsonTest has be removed");
};

const saveInfoIntoSessionStorage = () => {
    const jsonTest = loadJsonTest();
    sessionStorage.setItem("JsonTestSession", JSON.stringify(jsonTest));
    alert("Info saved into Session Storage");
};

const loadJsonTest = () => {
    return {
        Course: "DWFS",
        Session: 33,
        Day: "Thursday"
    };
};
