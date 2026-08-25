import Link from "next/link";

const clients = [
  "Zong CMPak Limited",
  "Teradata Pakistan",
  "EDOTCO Pakistan (Pvt.) Ltd.",
  "Gold Lion (Pvt.) Ltd.",
  "Elixir Technologies Pakistan",
  "Telecom Foundation (Pvt.) Ltd.",
  "Intercargo Logistics (Pvt.) Ltd.",
  "Radio Cab (Pvt.) Ltd.",
  "AEO Pakistan (Pvt.) Ltd.",
  "Capital Development Authority (CDA), Islamabad",
  "Prime Minister House (PM House), Islamabad",
  "Myco Engineers (Pvt.) Ltd.",
  "Pakistan Army",
  "Ufone 4G (Pvt.) Ltd.",
  "Ciklum Pakistan Private Limited",

  "Hycom Engineering",
  "Huawei Technologies Pakistan",
  "State Life Insurance Corporation of Pakistan",
  "AYB (Pvt.) Ltd.",
  "XGrid (Pvt.) Ltd.",
  "Cloud Sport (Pvt.) Ltd.",
  "Mall of Islamabad",
  "Saudi Pak Tower",
  "DHA Multan",

  "Many More Customers",
];

const contractorProjects = new Set([
  "Capital Development Authority (CDA), Islamabad",
  "Prime Minister House (PM House), Islamabad",
  "Ufone 4G (Pvt.) Ltd.",
  "Huawei Technologies Pakistan",
  "DHA Multan",
]);

export default function ClientsPage() {
  return (
    <main className="min-h-screen mt-40">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-6 pt-10">
          <div className="max-w-3xl">
            <span className="mb-5 inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-600">
              Our Network
            </span>

            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Our Major{" "}
              <span className="text-slate-500">Clients</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              We are proud to serve a diverse portfolio of organizations
              across Pakistan, providing reliable manpower and workforce
              solutions to leading companies and institutions.
            </p>
          </div>
        </div>

        {/* Decorative background */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-slate-100 blur-3xl" />
      </section>

      {/* Clients */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              Trusted By
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">
              Organizations We Work With
            </h2>
          </div>

          <div className="hidden h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white sm:flex">
            {clients.length}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {clients.map((client, index) => {
            const hasContractorNote = contractorProjects.has(client);

            return (
              <div
                key={client}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50"
              >
                <div className="flex items-start gap-5">
                  {/* Number */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-sm font-semibold text-slate-500 transition-colors duration-300 group-hover:bg-slate-900 group-hover:text-white">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-base font-semibold leading-6 text-slate-900">
                      {client}
                    </h3>

                    {hasContractorNote && (
                      <p className="mt-2 text-xs leading-5 text-slate-500">
                        Project works executed through appointed main
                        contractor.
                      </p>
                    )}
                  </div>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-slate-900 transition-all duration-300 group-hover:w-full" />
              </div>
            );
          })}
        </div>
      
      </section>

      {/* Bottom CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-[#0d2a4a] px-8 py-12 sm:px-12 lg:px-16">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
                Reliable Workforce Solutions
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Looking for dependable manpower solutions?
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-400 sm:text-base">
                Partner with us for trained, verified, and reliable workforce
                solutions tailored to your organization.
              </p>
            </div>

            <Link
              href="/contact-us"
              className="shrink-0 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}