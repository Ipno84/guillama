import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@renderer/components/card'
import { Initializer } from '@renderer/features/initializer/ui/initializer'
import { Grid } from '@renderer/components/grid'
import { SectionTitle } from '@renderer/features/section-title'

export const Dashboard: React.FC = () => {
  return (
    <>
      <SectionTitle
        title="Dashboard"
        hint="Monitoring and basic information to never lose sight of what's happening in your Ollama world."
      />
      <Grid>
        <Card>
          <CardHeader>
            <CardTitle>Stato Ollama</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>running/offline, host/porta, versione, GPU/CPU usate.</CardDescription>
            <Initializer />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Modelli locali</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>conteggio, spazio occupato, ultimi usati.</CardDescription>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Coda download/operazioni</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>progressi in corso.</CardDescription>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Azioni rapide</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>“Nuova chat”, “Installa modello”, “Apri Modelfile”</CardDescription>
          </CardContent>
        </Card>
      </Grid>
    </>
  )
}
