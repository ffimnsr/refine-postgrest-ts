import { createClient } from "../src/index";
const POSTGREST_INSTANCE_URL = "https://fake-api.play.postgrest.local";
const postgrestClient = createClient(POSTGREST_INSTANCE_URL);

export default postgrestClient;
