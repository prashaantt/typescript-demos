import { Deserializer, Serializer } from "./mixins";
import { PlayerController } from "./PlayerController";

export const SerializedPlayerController = Serializer(Deserializer(PlayerController));
