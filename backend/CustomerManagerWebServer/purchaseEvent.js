import avro from "avsc";

export default avro.Type.forSchema({
    type: "record",
    fields: [
        { name: "username", type: "string"},
        { name: "userid", type: "string"}, 
        { name: "price", type: "string"},
        { name: "timestamp", type: "string"}
    ]
});