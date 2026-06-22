export function getChatAvatarLabel(name: string) {
  const normalizedName = name.trim();

  if (!normalizedName) {
    return 'AG';
  }

  return normalizedName.slice(0, 2).toUpperCase();
}
