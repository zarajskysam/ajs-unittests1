export default function healthStatus(objHealth) {
  if (objHealth.health < 15) {
    return 'critical';
  } if (objHealth.health < 50) {
    return 'wounded';
  }
  return 'healthy';
}
