// eslint-disable-next-line @typescript-eslint/no-require-imports
const { default: mongoose } = require("mongoose")  

export const connectToDb = async () => {
    const connection: {isConnected: boolean | undefined} = {
    isConnected: undefined
};

    try {
        if(connection.isConnected) {  
            console.log("Using existing connection")
            return;
        }
        const db = await mongoose.connect(process.env.MONGO); 
        connection.isConnected = db.connection[0].readyState;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        console.log(error)
        throw new Error(error);
    }
}

export const getEntriesData = async () => {
    const res = await fetch(`http://localhost:3000/api/entries`)
  
    if (!res.ok) {
      throw new Error("Something went wrong")
    }
  
    return res.json();
  }