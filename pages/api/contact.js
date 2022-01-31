import { MongoClient } from "mongodb";
export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;
    //validate
    if (!email) {
      return res.status(422).json({ message: "Invalid Input" });
    }

    const newMessage = {
      email,
      name,
      message,
    };
    let client;
    try {
      client = MongoClient.connect("connection string");
    } catch (e) {
      client.close();
      return res.status(500).json({ message: "DB error" });
    }

    const db = client.db();
    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (e) {
      client.close();
      return res.status(500).json({ message: "DB error" });
    }

    client.close();
    return res.status(201).json({ message: "Success", data: newMessage });
  }
}
