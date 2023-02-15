function helloWorld() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Hello World!");
      }, 2000);
    });
  }
  
  const messages = async () => {
    const msg = await helloWorld();
    console.log(msg);
  };
  messages();
  
  function ambilDataUser() {
    fetch("https://reqres.in/api/users")
      .then((response) => response.json())
      .then((users) => console.log(users.data))
      .catch((err) => console.log(`Gagal Mengambil Data ${err.message}`));
  }
  ambilDataUser();
  
  const ambilDataUserAsync = async () => {
    try {
      const response = await fetch("https://reqres.in/api/users");
      const users = await response.json();
      console.log(users.data);
    } catch (err) {
      console.log(`Error fetching data: ${err.message}`);
    }
  };
  ambilDataUserAsync();