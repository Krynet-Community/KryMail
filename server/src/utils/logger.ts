export function logEvent(
  event: string,
  data?: unknown
) {

  console.log(
    JSON.stringify({
      timestamp: new Date()
        .toISOString(),

      event,

      data
    })
  );

}
