import { render, Stage, Sprite, Text, Container, Graphics } from '@inlet/react-pixi';
import getSample from "../sample";

const Sample = getSample();

const App = () => (
    <Container>
        {Object.values(Sample.pages['5f4ce22c-92f2-44bf-abbe-f243b717bde5'].entities).map(entity => (
            <Sprite key={entity.id} texture={PIXI.Texture.fromImage(require(`.${entity.source.id}`))} x={entity.position.x} y={250}></Sprite>
        ))}
    </Container>
);