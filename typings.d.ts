interface Message {
    text: String, 
    createdAt: admin.firestore.Timestamp;
    user: {
        _id : string, 
        name : string,
        avatar: string,
    };
};