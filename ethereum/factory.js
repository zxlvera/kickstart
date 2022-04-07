import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x1DD6d2bfA0B12ACed7742F3daD19dd1a277161B3"
);

export default instance;
