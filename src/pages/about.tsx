import Legacy from "@/components/legacy";
import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-3xl text-center justify-center">
          <h1 className={title()}>About</h1>
          <Legacy id="about" />
        </div>
      </section>
    </DefaultLayout>
  );
}
