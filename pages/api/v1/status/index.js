import database from "../../../../database";

function status(request, response) {
  response.status(200).json({ chave: "são acima da média" });
}

export default status;
