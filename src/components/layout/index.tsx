export default function Layout({children}: React.PropsWithChildren) {
   return (
      <>
         <header></header>
         <main>{children}</main>
      </>
   );
}
