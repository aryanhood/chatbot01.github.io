function talk() {
    var know = {
        "Hello": "Hello There :)",
        "Hey": "Hello There :)",
        "Hey There": "Hello There :)",
        "Hi": "Hello There :)",
        "Good morning": "Very good morning, hope you have a wonderful day ahead!",
        "Good afternoon": "Very good afternoon, hope you have a wonderful day ahead!",
        "Good evening": "Very good evening, hope you had a wonderful day today.",
        "who are you": "Hello, I am a chatbot developed by Aryan.",
        "Who are you": "Hello, I am a chatbot developed by Aryan.",
        "How are you": "Good :)",
        "how are you": "Good :)",
        "What can i do for you": "Hire me!",
        "Your followers":
            "I have my family of 200000 members, i don't have follower ,have supportive Famiy ",
        ok: "Thank You So Much ",
        Bye: "Okay! Will meet soon..",
    };
    var user = document.getElementById("userBox").value;
    document.getElementById("chatLog").innerHTML = user + "<br>";
    if (user in know) {
        document.getElementById("chatLog").innerHTML = know[user] + "<br>";
    } else {
        document.getElementById("chatLog").innerHTML =
            "Sorry, I didn't understand. <br>";
    }
}