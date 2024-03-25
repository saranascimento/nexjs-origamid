import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'sobre',
  description: 'Essa é a página sobre',
};

export default function SobrePage() {
  return (
    <main>
      <h2>Sobre</h2>
      <h2 style={{ margin: '1600px 0' }} id="empresa">
        A Empresa
      </h2>
    </main>
  );
}
