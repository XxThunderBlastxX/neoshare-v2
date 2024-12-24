import {MetaFunction} from "@remix-run/node";
import {PocketBaseInstance} from "~/service/pocketbase";
import AuthScreen from "./auth";

export const meta: MetaFunction = () => {
  return [
    { title: "NeoShare" },
    { name: "description", content: "This is a open source sharing application." },
  ];
};

export default function Index() {
  return PocketBaseInstance.instance.authStore.isValid ? window.location.assign("/upload") : <AuthScreen/>;
}
