import Header from '@/components/Header';
import TermsAndCondition from '@/components/TermsAndConditions';

export default function Ketentuan({ params }: { params: { lomba: string } }) {
  return (
    <>
      <Header current="sk" />
      <TermsAndCondition />
    </>
  );
}