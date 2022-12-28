async function getInfo() {
  try {
    const response = await axios.post("https://reqres.in/api/users?page=2", {
      username: "nikusha",
      password: "nikusha123",
    });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

getInfo();

async function getInformation() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1",
      {
        Headers: {
          authorization: "blablablabla",
        },
      }
    );
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

getInformation();
