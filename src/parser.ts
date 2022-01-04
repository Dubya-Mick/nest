import { SpeechSegment } from '@speechly/react-client';

export enum IntentType {
  Unknown = 'unknown',
  SetShape = 'set_shape',
}

export enum EntityType {
  Shape = 'shape',
}

const SpeechIntentValues = Object.values(IntentType) as string[];

export function parseIntent(segment: SpeechSegment): IntentType {
  const { intent } = segment;

  if (SpeechIntentValues.includes(intent.intent)) {
    return intent.intent as IntentType;
  }

  return IntentType.Unknown;
}

export function parseShapeEntity(segment: SpeechSegment): string | undefined {
  let shape;
  for (const e of segment.entities) {
    if (e.type === EntityType.Shape) {
      shape = e.value.toLowerCase();
      return shape;
    }
  }
  return shape;
}

export function parseSegment(segment: SpeechSegment) {
  const intent = parseIntent(segment);

  switch (intent) {
    case IntentType.SetShape:
      const shape = parseShapeEntity(segment);
      return shape;
  }
}
