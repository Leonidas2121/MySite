import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  BadgeCheck, Phone, Check, ArrowRight, FileText, MapPin, Mail, Bot, Sparkles,
  Handshake, Globe, ShieldCheck, Clock, MessageCircle, Lightbulb, Building2, Menu, X,
} from "lucide-react";
import { Toaster, toast } from "sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "IKEnow — Υποχρεωτική Ιστοσελίδα ΓΕΜΗ για ΙΚΕ" },
      { name: "description", content: "Νομότυπες ιστοσελίδες Γ.Ε.ΜΗ. για ΙΚΕ με .gr domain, παράδοση σε 3-5 ημέρες. Από 69€/έτος." },
      { property: "og:title", content: "IKEnow — Ιστοσελίδα ΓΕΜΗ για ΙΚΕ" },
      { property: "og:description", content: "Καλύψτε άμεσα τις απαιτήσεις του Γ.Ε.ΜΗ. (Ν. 4072/2012) με επαγγελματική εταιρική παρουσία." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav = [
  ["Υπηρεσίες", "#services"],
  ["Δείγματα Δουλειάς", "#portfolio"],
  ["Πακέτα Τιμών", "#pricing"],
  ["Γιατί εμάς", "#why"],
  ["Επικοινωνία", "#contact"],
] as const;

type Tier = "basic" | "pro" | "premium";
const demos: { tier: Tier; name: string; badge: string; desc: string; kind: number }[] = [
  { tier: "basic", name: "Alpha Logistics ΙΚΕ", badge: "Basic - Κάλυψη ΓΕΜΗ", desc: "Λιτή σελίδα συμμόρφωσης με νομικά στοιχεία, ΑΦΜ, αρ. ΓΕΜΗ και ισολογισμούς PDF.", kind: 0 },
  { tier: "pro", name: "Terra Consulting ΙΚΕ", badge: "Pro Business - Best Seller", desc: "Κομψό one-page site με Σχετικά, Υπηρεσίες, φωτογραφίες, Google Map και φόρμα.", kind: 1 },
  { tier: "pro", name: "Apex Energy ΙΚΕ", badge: "Pro Business", desc: "B2B ιστοσελίδα με παρουσίαση, gallery έργων και εταιρικό email.", kind: 2 },
  { tier: "premium", name: "Nexus Global ΙΚΕ", badge: "Premium Elite", desc: "Πολυσέλιδο εταιρικό site με AI βοηθό και δυναμική υποδοχή αιτημάτων.", kind: 3 },
];

const plans = [
  { id: "basic", name: "Basic", sub: "ΓΕΜΗ Fast", old: 89, price: 69, features: ["Πλήρης καταχώριση στοιχείων ΓΕΜΗ & ΑΦΜ", "Χώρος ανάρτησης Ισολογισμών (PDF)", "Κατοχύρωση .gr Domain (1 έτος)", "Φιλοξενία & SSL", "Email Forwarding"] },
  { id: "pro", name: "Pro Business", sub: "Εταιρικό", old: 139, price: 99, hot: true, features: ["Όλα τα χαρακτηριστικά Basic", "Πλήρες One-page site (5 ενότητες)", "Φωτογραφίες & Υπηρεσίες", "Google Maps", "Φόρμα Επικοινωνίας", "1-2 Εταιρικά Emails (info@company.gr)"] },
  { id: "premium", name: "Premium Elite", sub: "Ολοκληρωμένο", old: 320, price: 249, features: ["Όλα τα του Pro", "Πολυσέλιδο site (έως 4-5 σελίδες)", "Ενσωματωμένο AI Chatbot εξυπηρέτησης", "Σύστημα αυτόματης υποβολής αιτημάτων", "Έως 5 Emails", "Premium hosting"] },
];

function Logo({ light }: { light?: boolean }) {
  return (
    <a href="#top" className={`flex items-center gap-2 font-display text-xl font-bold ${light ? "text-navy-foreground" : "text-primary"}`}>
      <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent text-accent-foreground"><BadgeCheck className="h-5 w-5" /></span>
      IKE<span className="text-emerald">now</span>
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
        <Logo />
        <nav className="hidden gap-7 text-sm font-medium text-muted-foreground lg:flex">
          {nav.map(([l, h]) => <a key={h} href={h} className="transition hover:text-primary">{l}</a>)}
        </nav>
        <div className="hidden items-center gap-4 lg:flex">
          <a href="tel:+306907519628" className="flex items-center gap-1.5 text-sm font-semibold text-primary"><Phone className="h-4 w-4 text-accent" />6907519628</a>
          <a href="#contact" className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-navy-soft">Ζητήστε Κλήση</a>
        </div>
        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Μενού">{open ? <X /> : <Menu />}</button>
      </div>
      {open && (
        <div className="border-t bg-background px-5 py-4 lg:hidden">
          {nav.map(([l, h]) => <a key={h} href={h} onClick={() => setOpen(false)} className="block py-2 font-medium">{l}</a>)}
          <a href="tel:+306907519628" onClick={() => setOpen(false)} className="mt-2 flex items-center justify-center gap-1.5 py-2 font-semibold text-primary"><Phone className="h-4 w-4 text-accent" />6907519628</a>
          <a href="#contact" onClick={() => setOpen(false)} className="mt-2 block rounded-lg bg-primary px-4 py-2.5 text-center font-semibold text-primary-foreground">Ζητήστε Κλήση</a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="bg-hero relative overflow-hidden text-navy-foreground">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:py-28">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald/40 bg-emerald/10 px-3 py-1 text-xs font-semibold text-emerald"><ShieldCheck className="h-3.5 w-3.5" />Ν. 4072/2012 · Γ.Ε.ΜΗ.</span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
            Η Υποχρεωτική Ιστοσελίδα της ΙΚΕ σας, <span className="text-emerald">Εύκολα & Νομότυπα</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-navy-foreground/75">
            Καλύψτε άμεσα τις απαιτήσεις του Γ.Ε.ΜΗ. (Ν. 4072/2012) και αποκτήστε σοβαρή εταιρική παρουσία, με την εγγύηση του έμπιστου συνεργάτη σας.
          </p>
          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
            {["100% Συμβατό με Γ.Ε.ΜΗ.", "Παράδοση σε 3-5 ημέρες", "Κανονικό .gr Domain"].map((t) => (
              <span key={t} className="flex items-center gap-1.5"><Check className="h-4 w-4 text-emerald" />{t}</span>
            ))}
          </div>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#portfolio" className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3.5 font-semibold text-accent-foreground shadow-glow transition hover:brightness-110">Δείτε Δείγματα & Τιμές <ArrowRight className="h-4 w-4" /></a>
            <a href="#contact" className="rounded-lg border border-navy-foreground/30 px-6 py-3.5 font-semibold transition hover:bg-navy-foreground/10">Άμεση Επικοινωνία</a>
          </div>
        </div>
        <div className="relative hidden lg:block">
          <Browser url="alphalogistics.gr"><MockBasic /></Browser>
          <div className="absolute -bottom-6 -left-6 flex items-center gap-3 rounded-xl bg-card p-4 text-card-foreground shadow-card">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-emerald-soft text-accent"><BadgeCheck /></span>
            <div><div className="text-sm font-bold">Εγκρίθηκε από ΓΕΜΗ</div><div className="text-xs text-muted-foreground">Παράδοση σε 72 ώρες</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const items = [
    { icon: FileText, t: "Σελίδα Συμμόρφωσης ΓΕΜΗ", d: "Όλα τα υποχρεωτικά στοιχεία: επωνυμία, έδρα, ΑΦΜ, αρ. ΓΕΜΗ, ισολογισμοί." },
    { icon: Globe, t: "Domain, Hosting & SSL", d: "Κανονικό .gr domain, ασφαλής φιλοξενία και πιστοποιητικό SSL." },
    { icon: Building2, t: "Εταιρική Παρουσία", d: "Επαγγελματικό site που χτίζει εμπιστοσύνη σε πελάτες και συνεργάτες." },
  ];
  return (
    <section id="services" className="mx-auto max-w-7xl px-5 py-20">
      <SectionTitle eyebrow="Υπηρεσίες" title="Όλα όσα χρειάζεται η ΙΚΕ σας, σε ένα πακέτο" />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {items.map(({ icon: I, t, d }) => (
          <div key={t} className="rounded-2xl border bg-card p-7 shadow-card">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-emerald-soft text-accent"><I /></span>
            <h3 className="mt-5 text-lg font-bold text-primary">{t}</h3>
            <p className="mt-2 text-muted-foreground">{d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function SectionTitle({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <div className="text-sm font-bold uppercase tracking-widest text-accent">{eyebrow}</div>
      <h2 className="mt-3 text-3xl font-bold text-primary md:text-4xl">{title}</h2>
      {sub && <p className="mt-4 text-muted-foreground">{sub}</p>}
    </div>
  );
}

function Browser({ url, children }: { url: string; children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-xl border bg-card text-card-foreground shadow-card">
      <div className="flex items-center gap-2 border-b bg-muted px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-chart-4" />
        <span className="h-2.5 w-2.5 rounded-full bg-accent" />
        <span className="ml-3 flex-1 truncate rounded bg-background px-2 py-0.5 text-[11px] text-muted-foreground">🔒 https://{url}</span>
      </div>
      <div className="h-64 overflow-hidden">{children}</div>
    </div>
  );
}

const Bar = ({ w, c = "bg-border" }: { w: string; c?: string }) => <div className={`h-2 rounded ${c} ${w}`} />;

function MockBasic() {
  return (
    <div className="p-5 text-xs">
      <div className="font-display text-base font-bold text-primary">Alpha Logistics ΙΚΕ</div>
      <div className="mt-1 text-muted-foreground">Στοιχεία εταιρείας κατά Ν. 4072/2012</div>
      <div className="mt-4 grid grid-cols-2 gap-2">
        {[["ΑΦΜ", "801234567"], ["Αρ. ΓΕΜΗ", "158765401000"], ["Έδρα", "Αθήνα"], ["ΔΟΥ", "ΦΑΕ Αθηνών"]].map(([k, v]) => (
          <div key={k} className="rounded border p-2"><div className="text-[10px] text-muted-foreground">{k}</div><div className="font-semibold">{v}</div></div>
        ))}
      </div>
      <div className="mt-3 space-y-1.5">
        {["Ισολογισμός 2025.pdf", "Ισολογισμός 2024.pdf"].map((f) => (
          <div key={f} className="flex items-center gap-2 rounded bg-emerald-soft px-2 py-1.5 font-medium text-primary"><FileText className="h-3.5 w-3.5 text-accent" />{f}</div>
        ))}
      </div>
    </div>
  );
}
function MockTerra() {
  return (
    <div className="text-xs">
      <div className="bg-hero p-5 text-navy-foreground"><div className="font-display text-sm font-bold">Terra Consulting</div><div className="mt-3 text-base font-bold">Στρατηγική που φέρνει αποτελέσματα</div><div className="mt-3 inline-block rounded bg-accent px-2 py-1 text-[10px] text-accent-foreground">Επικοινωνία</div></div>
      <div className="grid grid-cols-3 gap-2 p-4">{[0, 1, 2].map((i) => <div key={i} className="space-y-1.5 rounded border p-2"><div className="h-6 w-6 rounded bg-emerald-soft" /><Bar w="w-3/4" /><Bar w="w-1/2" /></div>)}</div>
      <div className="mx-4 flex h-12 items-center justify-center gap-1 rounded bg-muted text-muted-foreground"><MapPin className="h-4 w-4 text-accent" />Google Map</div>
    </div>
  );
}
function MockApex() {
  return (
    <div className="p-4 text-xs">
      <div className="flex items-center justify-between"><div className="font-display text-sm font-bold text-primary">APEX<span className="text-accent">energy</span></div><div className="flex items-center gap-1 text-muted-foreground"><Mail className="h-3 w-3" />info@apexenergy.gr</div></div>
      <div className="mt-3 text-base font-bold text-primary">Ενεργειακά έργα B2B</div>
      <div className="mt-3 grid grid-cols-3 gap-2">{[0, 1, 2, 3, 4, 5].map((i) => <div key={i} className={`h-14 rounded ${i % 2 ? "bg-navy-soft" : "bg-accent/60"}`} />)}</div>
      <div className="mt-3 space-y-1.5"><Bar w="w-full" /><Bar w="w-2/3" /></div>
    </div>
  );
}
function MockNexus() {
  return (
    <div className="relative h-full bg-navy p-4 text-xs text-navy-foreground">
      <div className="flex gap-3 text-[10px] text-navy-foreground/60"><b className="text-navy-foreground">NEXUS</b><span>Αρχική</span><span>Λύσεις</span><span>Ομάδα</span><span>Blog</span></div>
      <div className="mt-4 text-base font-bold">Παγκόσμιες λύσεις, τοπική εξειδίκευση</div>
      <div className="mt-3 space-y-1.5"><Bar w="w-4/5" c="bg-navy-soft" /><Bar w="w-3/5" c="bg-navy-soft" /></div>
      <div className="mt-4 rounded border border-navy-soft p-2"><div className="text-[10px] text-navy-foreground/60">Νέο αίτημα</div><Bar w="mt-1 w-1/2" c="bg-navy-soft" /></div>
      <div className="absolute bottom-3 right-3 w-40 rounded-lg bg-card p-2 text-card-foreground shadow-card">
        <div className="flex items-center gap-1 font-semibold"><Bot className="h-3.5 w-3.5 text-accent" />AI Βοηθός</div>
        <div className="mt-1 rounded bg-muted p-1.5 text-[10px]">Γεια σας! Πώς μπορώ να βοηθήσω;</div>
      </div>
    </div>
  );
}
const mocks = [MockBasic, MockTerra, MockApex, MockNexus];

function Portfolio() {
  const [tab, setTab] = useState<"all" | Tier>("all");
  const tabs: [typeof tab, string][] = [["all", "Όλα"], ["basic", "Πακέτο Basic (ΓΕΜΗ)"], ["pro", "Πακέτο Pro (Εταιρικό)"], ["premium", "Πακέτο Premium"]];
  const list = demos.filter((d) => tab === "all" || d.tier === tab);
  return (
    <section id="portfolio" className="bg-secondary py-20">
      <div className="mx-auto max-w-7xl px-5">
        <SectionTitle eyebrow="Portfolio" title="Δείγματα Δουλειάς & Τι Παραλαμβάνετε" sub="Δείτε την ποιότητα πριν παραγγείλετε." />
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {tabs.map(([k, l]) => (
            <button key={k} onClick={() => setTab(k)} className={`rounded-full px-4 py-2 text-sm font-semibold transition ${tab === k ? "bg-primary text-primary-foreground" : "bg-card text-muted-foreground hover:text-primary"}`}>{l}</button>
          ))}
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {list.map((d) => {
            const M = mocks[d.kind] ?? MockBasic;
            return (
              <article key={d.name} className="group rounded-2xl bg-card p-4 shadow-card transition hover:-translate-y-1">
                <div className="transition group-hover:scale-[1.01]"><Browser url={(d.name.split(" ")[0] ?? "demo").toLowerCase() + ".gr"}><M /></Browser></div>
                <div className="p-3 pt-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-lg font-bold text-primary">{d.name}</h3>
                    <span className={`rounded-full px-3 py-1 text-xs font-bold ${d.tier === "premium" ? "bg-primary text-primary-foreground" : "bg-emerald-soft text-accent"}`}>{d.badge}</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{d.desc}</p>
                  <p className="mt-2 text-sm font-medium text-foreground">Ακριβώς ό,τι χρειάζεται η επιχείρησή σας, έτοιμο και λειτουργικό.</p>
                  <button onClick={() => toast("Το demo ανοίγει σύντομα", { description: d.name })} className="mt-4 inline-flex items-center gap-2 rounded-lg border border-primary px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary hover:text-primary-foreground">Προβολή Demo <ArrowRight className="h-4 w-4" /></button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-7xl px-5 py-20">
      <SectionTitle eyebrow="Πακέτα Τιμών" title="Διαφανείς τιμές, χωρίς εκπλήξεις" />
      <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
        {plans.map((p) => (
          <div key={p.id} className={`relative flex flex-col rounded-2xl p-8 ${p.hot ? "bg-navy text-navy-foreground shadow-glow lg:-my-4" : "border bg-card shadow-card"}`}>
            {p.hot && <span className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full bg-accent px-4 py-1 text-xs font-bold text-accent-foreground"><Sparkles className="h-3.5 w-3.5" />ΔΗΜΟΦΙΛΕΣ</span>}
            <div className={`text-sm font-semibold ${p.hot ? "text-emerald" : "text-accent"}`}>{p.sub}</div>
            <h3 className="mt-1 text-2xl font-bold">{p.name}</h3>
            <div className="mt-6 flex items-end gap-2">
              <span className={`text-xl line-through ${p.hot ? "text-navy-foreground/50" : "text-muted-foreground"}`}>{p.old}€</span>
              <span className="font-display text-5xl font-extrabold">{p.price}€</span>
              <span className={p.hot ? "text-navy-foreground/70" : "text-muted-foreground"}>/ έτος</span>
            </div>
            <div className={`mt-1 text-xs ${p.hot ? "text-navy-foreground/60" : "text-muted-foreground"}`}>+ ΦΠΑ 24%</div>
            <ul className="mt-7 flex-1 space-y-3 text-sm">
              {p.features.map((f) => <li key={f} className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-emerald" />{f}</li>)}
            </ul>
            <a href="#contact" className={`mt-8 rounded-lg px-5 py-3 text-center font-semibold transition ${p.hot ? "bg-accent text-accent-foreground hover:brightness-110" : "bg-primary text-primary-foreground hover:bg-navy-soft"}`}>Επιλογή πακέτου</a>
          </div>
        ))}
      </div>
      <p className="mx-auto mt-12 flex max-w-xl items-center justify-center gap-2 rounded-xl bg-emerald-soft px-5 py-3 text-center text-sm font-medium text-primary">
        <Lightbulb className="h-4 w-4 shrink-0 text-accent" />100% εκπιπτόμενη επιχειρηματική δαπάνη. Ο ΦΠΑ συμψηφίζεται πλήρως.
      </p>
    </section>
  );
}

function Why() {
  const items = [
    { i: Handshake, t: "Συνεργασία με τον Λογιστή σας", d: "Μηδενικός κόπος για εσάς, αντλούμε απευθείας τα στοιχεία." },
    { i: Globe, t: "Κανονικό .gr Domain", d: "Όχι υποβαθμισμένα subdomains ή τρίτες πλατφόρμες." },
    { i: ShieldCheck, t: "Εγγύηση Εγκυρότητας Γ.Ε.ΜΗ.", d: "100% συμμόρφωση με τον νόμο." },
    { i: Clock, t: "Άμεση Παράδοση σε 72 Ώρες", d: "Η ιστοσελίδα σας online σε λίγες μόνο ημέρες." },
  ];
  return (
    <section id="why" className="bg-hero py-20 text-navy-foreground">
      <div className="mx-auto max-w-7xl px-5">
        <div className="text-center"><div className="text-sm font-bold uppercase tracking-widest text-emerald">Γιατί εμάς</div><h2 className="mt-3 text-3xl font-bold md:text-4xl">Ο έμπιστος συνεργάτης της ΙΚΕ σας</h2></div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ i: I, t, d }) => (
            <div key={t} className="rounded-2xl border border-navy-foreground/10 bg-navy-foreground/5 p-6">
              <I className="h-8 w-8 text-emerald" />
              <h3 className="mt-4 font-bold">{t}</h3>
              <p className="mt-2 text-sm text-navy-foreground/70">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const field = "w-full rounded-lg border bg-background px-3.5 py-2.5 text-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-ring/30";

function Contact() {
  const [done, setDone] = useState(false);
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.currentTarget.reset();
    setDone(true);
    toast.success("Το αίτημά σας εστάλη!", { description: "Θα επικοινωνήσουμε μαζί σας άμεσα." });
  };
  return (
    <section id="contact" className="mx-auto max-w-7xl px-5 py-20">
      <SectionTitle eyebrow="Επικοινωνία" title="Επικοινωνήστε Μαζί Μας" />
      <div className="mt-12 grid gap-8 lg:grid-cols-5">
        <div className="space-y-5 lg:col-span-2">
          <p className="text-lg font-medium text-primary">Είμαστε δίπλα σας για οποιαδήποτε απορία ή άμεση έναρξη.</p>
          <a href="tel:+306907519628" className="flex items-center gap-3 rounded-xl border bg-card p-4"><Phone className="text-accent" /><div><div className="font-semibold">+30 6907519628</div><div className="text-sm text-muted-foreground">Άμεση τηλεφωνική εξυπηρέτηση</div></div></a>
          <a href="mailto:ikesites@outlook.com" className="flex items-center gap-3 rounded-xl border bg-card p-4 font-semibold"><Mail className="text-accent" />ikesites@outlook.com</a>
          <div className="grid grid-cols-2 gap-3">
            <a href="viber://chat?number=%2B306907519628" className="flex items-center justify-center gap-2 rounded-lg bg-navy-soft px-3 py-3 text-sm font-semibold text-navy-foreground"><MessageCircle className="h-4 w-4" />Συνομιλία στο Viber</a>
            <a href="https://wa.me/306907519628" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-lg bg-accent px-3 py-3 text-sm font-semibold text-accent-foreground"><MessageCircle className="h-4 w-4" />WhatsApp Chat</a>
          </div>
          <div className="flex items-center gap-3 text-sm text-muted-foreground"><Clock className="h-4 w-4 text-accent" />Δευτέρα - Παρασκευή: 09:00 - 18:00</div>
          <div className="rounded-xl border-2 border-dashed border-accent bg-emerald-soft p-4 text-sm font-medium text-primary">
            Έρχεστε από συνεργαζόμενο λογιστικό γραφείο; Αναφέρετε το όνομα του λογιστή σας για άμεση προτεραιότητα!
          </div>
        </div>
        <form onSubmit={submit} className="grid gap-4 rounded-2xl border bg-card p-7 shadow-card sm:grid-cols-2 lg:col-span-3">
          <L label="Ονοματεπώνυμο *"><input required className={field} /></L>
          <L label="Τηλέφωνο Επικοινωνίας *"><input required type="tel" className={field} /></L>
          <L label="Email *"><input required type="email" className={field} /></L>
          <L label="Επωνυμία / ΑΦΜ ΙΚΕ"><input className={field} /></L>
          <L label="Επιθυμητό Πακέτο">
            <select className={field} defaultValue="pro">
              <option value="basic">Basic 69€</option><option value="pro">Pro Business 99€</option><option value="premium">Premium 249€</option>
            </select>
          </L>
          <L label="Όνομα Συνεργαζόμενου Λογιστή"><input className={field} /></L>
          <div className="sm:col-span-2"><L label="Σημειώσεις / Μήνυμα"><textarea rows={4} className={field} /></L></div>
          <button className="rounded-lg bg-accent px-6 py-3.5 font-semibold text-accent-foreground shadow-glow transition hover:brightness-110 sm:col-span-2">Αποστολή Αιτήματος & Έναρξη</button>
        </form>
      </div>
      {done && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-navy/60 p-5" onClick={() => setDone(false)}>
          <div className="max-w-sm rounded-2xl bg-card p-8 text-center shadow-card" onClick={(e) => e.stopPropagation()}>
            <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-emerald-soft text-accent"><BadgeCheck className="h-8 w-8" /></span>
            <h3 className="mt-4 text-xl font-bold text-primary">Ευχαριστούμε!</h3>
            <p className="mt-2 text-muted-foreground">Λάβαμε το αίτημά σας. Ένας σύμβουλος θα σας καλέσει εντός της ημέρας.</p>
            <button onClick={() => setDone(false)} className="mt-6 rounded-lg bg-primary px-5 py-2.5 font-semibold text-primary-foreground">Κλείσιμο</button>
          </div>
        </div>
      )}
    </section>
  );
}
const L = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <label className="block space-y-1.5 text-sm font-medium">{label}{children}</label>
);

function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 md:grid-cols-3">
        <div><Logo light /><p className="mt-3 text-sm text-navy-foreground/70">Νομότυπες ιστοσελίδες Γ.Ε.ΜΗ. για ΙΚΕ. ikenow.gr</p></div>
        <div className="grid grid-cols-2 gap-2 text-sm text-navy-foreground/70">{nav.map(([l, h]) => <a key={h} href={h} className="hover:text-emerald">{l}</a>)}</div>
        <div className="text-sm text-navy-foreground/70"><a href="mailto:ikesites@outlook.com" className="block transition hover:text-emerald">ikesites@outlook.com</a><a href="tel:+306907519628" className="block transition hover:text-emerald">+30 6907519628</a></div>
      </div>
      <div className="border-t border-navy-foreground/10 px-5 py-5 text-center text-xs text-navy-foreground/60">
        IKEnow © 2026 · Τα προσωπικά σας δεδομένα επεξεργάζονται σύμφωνα με τον GDPR και την Πολιτική Απορρήτου μας.
      </div>
    </footer>
  );
}

function Index() {
  return (
    <>
      <Header />
      <main><Hero /><Services /><Portfolio /><Pricing /><Why /><Contact /></main>
      <Footer />
      <Toaster position="top-center" richColors />
    </>
  );
}
