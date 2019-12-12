import React, { useState } from "react";
import OneSignal1 from "onesignal-node";

const myClient = new OneSignal1.Client({
  userAuthKey: "NDYzYTgzM2EtODExYy00YzUxLTg3YjgtZGRmYmYzN2I1YmI4",
  app: {
    appAuthKey: "ODg1NGI5ZDYtNjViMC00OTAyLWJiOTEtNWIzZGNkN2E0YjRm",
    appId: "85d22519-b046-4a87-a167-fbfb88b7664c"
  }
});
const OneSignal = window.OneSignal || [];
OneSignal.push(async () => {
  OneSignal.on("notificationDisplay", event => {
    console.log(event);
  });
});
export default function Example() {
  const [count, setCount] = useState(0);
  const [age, setage] = useState(0);
  const [todos, setTodes] = useState([
    {
      id: 1,
      name: "banana"
    },
    {
      id: 2,
      name: "banana1"
    }
  ]);
  // const onAddTodo = () => {
  //   setTodes([
  //     ...todos,
  //     { id: todos[todos.length - 1].id + 1, name: "vanphu1" }
  //   ]);
  // };
  const removeTodo = id => {
    setTodes(todos.filter(item => item.id !== id));
  };

  const onMessages = () => {
    const firstNotification = new OneSignal1.Notification({
      title: {
        en: "Bạn đã nhận được thông báo. vui lòng nhận"
      },
      contents: {
        en: "Bạn đã nhận được thông báo. vui lòng nhận "
      },
      url: "https://www.youtube.com/watch?v=4h3zOonOm_I",
      chrome_web_image:
        "https://www.pond5.com/images/images_db/vlp/image-hero-poster.jpg",
      content_available: true
    });
    // set target users
    firstNotification.postBody.included_segments = ["All"];
    firstNotification.postBody.headings = { en: "Hệ thống giám sát đầu tư" };
    myClient.sendNotification(firstNotification, (err, httpResponse, data) => {
      if (err) {
        console.log("Something went wrong...");
      } else {
        console.log(data, httpResponse.statusCode);
      }
    });
  };
  return (
    <div>
      <div>
        <button onClick={onMessages}>add todos</button>
        <h2>Todos</h2>
        {todos.map(item => (
          <p key={item.id} onDoubleClick={() => removeTodo(item.id)}>
            {item.name}
          </p>
        ))}
      </div>
      <div>
        <h3>Age</h3>
        <p>{age}</p>
        <button onClick={() => setage(age + 1)}>add ages</button>
      </div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
