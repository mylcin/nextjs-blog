import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;
    if (
      !email ||
      !email.includes("@" && ".") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid user input!" });
      return;
    }
    // store in mongodb
    const newMessage = {
      email,
      name,
      message,
    };
    const url = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTERNAME}.wgh882r.mongodb.net/?retryWrites=true&w=majority`;
    const client = new MongoClient(url);
    try {
      await client.connect();
    } catch (error) {
      res.status(500).json({ message: "Could not connect to database." });
      return;
    }
    const db = client.db(process.env.DB_DBNAME);
    const collection = db.collection("messages");
    try {
      const result = await collection.insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      res.status(500).json({ message: "Storing user message failed." });
      return;
    }
    client.close();
    res.status(201).json({ message: "Successfully stored user data." });
  }
}

export default handler;
