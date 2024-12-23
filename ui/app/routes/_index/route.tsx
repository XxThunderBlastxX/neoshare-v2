import type {MetaFunction} from "@remix-run/node";
import AuthScreen from "~/routes/_index/auth";
import {PocketBaseInstance} from "~/service/pocketbase";
import UploadScreen from "~/routes/_index/upload";

export const meta: MetaFunction = () => {
  return [
    { title: "NeoShare" },
    { name: "description", content: "This is a open source sharing application." },
  ];
};

export default function Index() {
  return PocketBaseInstance.instance.authStore.isValid ?  <UploadScreen/> : <AuthScreen/>;
}
