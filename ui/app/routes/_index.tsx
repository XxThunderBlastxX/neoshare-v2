import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "NeoShare" },
    { name: "description", content: "This is a open source sharing application." },
  ];
};

export default function Index() {
  return (
      <section className="px-8 pt-8">
        <button className="btn btn-outline btn-success mb-8">Login</button>
        <h1 className="pb-3">NeoShare </h1>
        <p className="pb-3">This is a simple file sharing service. Upload your files and share them with others.</p>
        <p className="pb-3">On NeoShare, you can simply upload files. You can share links to those files with anyone, and they never have to sign up for an account.</p>
      </section>
  );
}
