import AgentCard from "../../includes/agentCard/agentCard";

function Agents() {
  return (
    <div className="mt-5 mb-5"> 
      <p className="pre-heading-title">Perfect Team</p>
      <h1 className="heading-title">Our Agents</h1>
      <div className="container">
                    <div className="row">
                        <div className="col-sm-3">
                            <AgentCard
                                name="Wellington Tayo"
                                position="Manager"
                                imageUrl="https://randomuser.me/api/portraits/men/16.jpg"
                                numberOfSales='89'
                            />
                        </div>
                        <div className="col-sm-3">
                        <AgentCard
                                name="Sola Adams"
                                position="Realtor"
                                imageUrl="https://randomuser.me/api/portraits/women/8.jpg"
                                numberOfSales='4'
                            />
                        </div>
                        <div className="col-sm-3">
                        <AgentCard
                                name="Adebayo Michael"
                                position="Sales Manager"
                                imageUrl="https://randomuser.me/api/portraits/men/54.jpg"
                                numberOfSales='22'
                            />
                        </div>
                        <div className="col-sm-3">
                        <AgentCard
                                name="Chan Syo"
                                position="House Manager"
                                imageUrl="https://randomuser.me/api/portraits/women/44.jpg"
                                numberOfSales='8'
                            />
                        </div>
                    </div>
                </div>
    </div>
  );
}

export default Agents;
