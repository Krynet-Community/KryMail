import sodium from "libsodium-wrappers";

export async function initializeCrypto() {
  await sodium.ready;
}

export function randomId(): string {
  return sodium.to_hex(sodium.randombytes_buf(16));
}

export function randomNonce(): Uint8Array {
  return sodium.randombytes_buf(
    sodium.crypto_secretbox_NONCEBYTES
  );
}

export function encodeBase64(data: Uint8Array): string {
  return sodium.to_base64(
    data,
    sodium.base64_variants.ORIGINAL
  );
}

export function decodeBase64(data: string): Uint8Array {
  return sodium.from_base64(
    data,
    sodium.base64_variants.ORIGINAL
  );
}

export function generateSigningKeyPair() {
  return sodium.crypto_sign_keypair();
}
