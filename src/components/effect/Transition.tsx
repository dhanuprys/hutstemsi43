import { DetailedHTMLProps, HTMLAttributes } from 'react';

export default function Transition({ children }: {
  children: DetailedHTMLProps<HTMLAttributes<HTMLBodyElement>, HTMLBodyElement>
}) {
  return (
    {children}
  );
}