import { serve } from "./serve";
import { hello, bye, welcome, topStories, topStories2, topStories3 } from "./routes";

const routes = [welcome, hello, bye, topStories, topStories2, topStories3];

serve(routes, 3000);
