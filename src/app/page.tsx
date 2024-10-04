import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Coffee, Pizza, PartyPopper, Lightbulb, Trophy } from "lucide-react"

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-400 to-pink-500 text-white p-8 flex flex-col items-center" style={{fontFamily: '"Comic Sans MS", "Comic Sans", cursive'}}>
      <header className="text-center mb-12 max-w-2xl">
        <h1 className="text-5xl font-bold mb-4" style={{fontFamily: '"Times New Roman", Times, serif'}}>Vote for DrunkenCloud</h1>
        <p className="text-2xl font-semibold">"Because Experience is Overrated!"</p>
      </header>

      <main className="w-full max-w-2xl">
        <section className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{fontFamily: '"Times New Roman", Times, serif'}}>Unparalleled Qualifications</h2>
          <Card className="bg-white/10 backdrop-blur-lg">
            <CardContent className="p-6">
              <ul className="space-y-4">
                <li className="flex items-center justify-center">
                  <Coffee className="mr-2" />
                  Can drink 25 cups of coffee in 5 minutes
                </li>
                <li className="flex items-center justify-center">
                  <Pizza className="mr-2" />
                  Survived 1 year of mess food with little Rishabs/Ashwins
                </li>
                <li className="flex items-center justify-center">
                  <PartyPopper className="mr-2" />
                  Didnt contribute to the best hostel event in 2023 i.e hostel night.
                </li>
                <li className="flex items-center justify-center">
                  <Lightbulb className="mr-2" />
                  Mastered the art of looking awake whilst sleeping during lectures
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{fontFamily: '"Times New Roman", Times, serif'}}>Revolutionary Campaign Promises</h2>
          <div className="grid grid-cols-1 gap-4">
            {[
              "Replace all water fountains with energy drink dispensers",
              "Implement a 'Casuals Fridays' dress code",
              "Install nap pods in every classroom",
              "Make memes a mandatory part of all presentations",
              "Establish a 24/7 delivery service on campus for takeout from Rishabs/Ashwins (Collab)",
              "Replace final exams with Gaming Tournaments"
            ].map((promise, index) => (
              <Badge key={index} variant="secondary" className="p-4 text-lg">
                {promise}
              </Badge>
            ))}
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4" style={{fontFamily: '"Times New Roman", Times, serif'}}>Ready to Embrace Chaos?</h2>
          <a href="http://bit.ly/3XUqENS" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-500">
              <Trophy className="mr-2" />
              Vote for Glorious Revolution!
            </Button>
          </a>
        </section>
      </main>

      <footer className="mt-12 text-center text-sm max-w-2xl" style={{fontFamily: '"Times New Roman", Times, serif'}}>
        <p>Paid for by the "Why Not?" Committee for Campus Shenanigans</p>
      </footer>
    </div>
  )
}