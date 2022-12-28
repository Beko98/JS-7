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

const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const info1 = document.getElementById("info1");
const info2 = document.getElementById("info2");

button1.addEventListener("click", async () => {
  try {
    const response = await axios.get("https://reqres.in/api/users?page=2");
    info1.innerHTML = `total pages: ${response.data.total_pages}`;
  } catch (error) {
    console.error(error);
    info1.innerHTML = "Error" + error.message;
  }
});

button2.addEventListener("click", async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    info2.innerHTML = `title: ${response.data.title}`;
  } catch {
    console.error(error);
    info2.innerHTML = "Error" + error.message;
  }
});
