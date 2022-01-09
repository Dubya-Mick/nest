import { SpeechSegment } from '@speechly/react-client';

export enum IntentType {
  Unknown = 'unknown',
  SetShape = 'set_shape',
  Increase = 'increase',
  Decrease = 'decrease',
}

export enum EntityType {
  Shape = 'shape',
  Attribute = 'attribute',
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

export function parseAttributeEntity(
  segment: SpeechSegment
): string | undefined {
  let attribute;
  for (const e of segment.entities) {
    if (e.type === EntityType.Attribute) {
      attribute = e.value.toLowerCase();
      return attribute;
    }
  }
  return attribute;
}
