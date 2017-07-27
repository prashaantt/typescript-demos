import { serve } from "./serve";
import { hello, bye, welcome, topStories } from "./routes";

const routes = [welcome, hello, bye, topStories];

serve(routes, 3000);
