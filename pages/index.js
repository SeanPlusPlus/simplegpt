import Header from '../components/Header'
import Nav from '../components/Nav'
import Alert from '../components/Alert'
import Input from '../components/Input'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col h-screen justify-between">
        <Nav />
        <main className="mb-auto">
          <Alert />
          <Input />
        </main>
        <Footer />
      </div>
    </>
  )
}
