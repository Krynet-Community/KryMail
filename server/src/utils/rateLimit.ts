const attempts = new Map<string, number[]>();

export function allowed(
  key: string,
  max = 5,
  window = 60000
) {

  const now = Date.now();

  const history =
    attempts.get(key) ?? [];

  const recent =
    history.filter(
      time => now - time < window
    );

  if (recent.length >= max) {
    return false;
  }

  recent.push(now);

  attempts.set(key, recent);

  return true;
}
