import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrl: './convertidor.component.css'
})
export class ConvertidorComponent {
  cantidad: number = 0;
  tengo: string = "USD";
  quiero: string ="EUR";
  total: number =0;

  monedas:string[] = ['USD','EUR','LIBRA','PESO MX','WON','YUAN',
                      'YEN','PESO ARG','FRANCO SUIZO','USD AUSTRALIANO'];
  constructor(){

  }
  ngOnInit():void{

  }

  convertir():void{
    switch(this.tengo){
      case 'USD':
        if(this.quiero==='USD'){
          this.total=this.cantidad;
        }
        if(this.quiero==='EUR'){
          this.total=(this.cantidad*.93);
        }
        if(this.quiero==='LIBRA'){
          this.total=this.cantidad*.79;
        }
        if(this.quiero=='PESO MX'){
          this.total=this.cantidad*16.59;
        }
        if(this.quiero=='WON'){
          this.total=this.cantidad*1348.98;
        }
        if (this.quiero=='YUAN'){
          this.total=this.cantidad*7.23;
        }
        if (this.quiero=='YEN'){
          this.total=this.cantidad*151.22;
        }
        if (this.quiero=='PESO ARG'){
          this.total=this.cantidad*857.73;
        }
        if (this.quiero=='FRANCO SUIZO'){
          this.total=this.cantidad*.090;
        }
        if (this.quiero=='USD AUSTRALIANO'){
          this.total=this.cantidad*1.535;
        }
        break;

        case 'EUR':
          if(this.quiero==='USD'){
            this.total=this.cantidad*1.08;
          }
          if(this.quiero==='EUR'){
            this.total=this.cantidad;
          }
          if(this.quiero==='LIBRA'){
            this.total=this.cantidad*.85;
          }
          if(this.quiero=='PESO MX'){
            this.total=this.cantidad*17.93;
          }
          if(this.quiero=='WON'){
            this.total=this.cantidad*1457.23;
          }
          if (this.quiero=='YUAN'){
            this.total=this.cantidad*7.84;
          }
          if (this.quiero=='YEN'){
            this.total=this.cantidad*163.26;
          }
          if (this.quiero=='PESO ARG'){
            this.total=this.cantidad*925.95;
          }
          if (this.quiero=='FRANCO SUIZO'){
            this.total=this.cantidad*.97;
          }
          if (this.quiero=='USD AUSTRALIANO'){
            this.total=this.cantidad*1.66;
          }
          break;

          case 'LIBRA':
            if(this.quiero==='USD'){
              this.total=this.cantidad*1.26;
            }
            if(this.quiero==='EUR'){
              this.total=this.cantidad*.17;
            }
            if(this.quiero==='LIBRA'){
              this.total=this.cantidad;
            }
            if(this.quiero=='PESO MX'){
              this.total=this.cantidad*20.97;
            }
            if(this.quiero=='WON'){
              this.total=this.cantidad*1704.18;
            }
            if (this.quiero=='YUAN'){
              this.total=this.cantidad*9.17;
            }
            if (this.quiero=='YEN'){
              this.total=this.cantidad*191.04;
            }
            if (this.quiero=='PESO ARG'){
              this.total=this.cantidad*1082.79;
            }
            if (this.quiero=='FRANCO SUIZO'){
              this.total=this.cantidad*1.14;
            }
            if (this.quiero=='USD AUSTRALIANO'){
              this.total=this.cantidad*1.94;
            }
            break;

            case 'PESO MX':
              if(this.quiero==='USD'){
                this.total=this.cantidad*.060;
              }
              if(this.quiero==='EUR'){
                this.total=this.cantidad*.056;
              }
              if(this.quiero==='LIBRA'){
                this.total=this.cantidad*.048;
              }
              if(this.quiero=='PESO MX'){
                this.total=this.cantidad;
              }
              if(this.quiero=='WON'){
                this.total=this.cantidad*81.30;
              }
              if (this.quiero=='YUAN'){
                this.total=this.cantidad*.44;
              }
              if (this.quiero=='YEN'){
                this.total=this.cantidad*9.11;
              }
              if (this.quiero=='PESO ARG'){
                this.total=this.cantidad*51.67;
              }
              if (this.quiero=='FRANCO SUIZO'){
                this.total=this.cantidad*.054;
              }
              if (this.quiero=='USD AUSTRALIANO'){
                this.total=this.cantidad*.092;
              }
              break;
        
              case 'WON':
                if(this.quiero==='USD'){
                  this.total=this.cantidad*.00074;
                }
                if(this.quiero==='EUR'){
                  this.total=this.cantidad*.00069;
                }
                if(this.quiero==='LIBRA'){
                  this.total=this.cantidad*.00059;
                }
                if(this.quiero=='PESO MX'){
                  this.total=this.cantidad*.012;
                }
                if(this.quiero=='WON'){
                  this.total=this.cantidad;
                }
                if (this.quiero=='YUAN'){
                  this.total=this.cantidad*.0054;
                }
                if (this.quiero=='YEN'){
                  this.total=this.cantidad*.11;
                }
                if (this.quiero=='PESO ARG'){
                  this.total=this.cantidad*.64;
                }
                if (this.quiero=='FRANCO SUIZO'){
                  this.total=this.cantidad*.00067;
                }
                if (this.quiero=='USD AUSTRALIANO'){
                  this.total=this.cantidad*.0011;
                }
                break;

                case 'YUAN':
                  if(this.quiero==='USD'){
                    this.total=this.cantidad*.14;
                  }
                  if(this.quiero==='EUR'){
                    this.total=this.cantidad*.13;
                  }
                  if(this.quiero==='LIBRA'){
                    this.total=this.cantidad*.11;
                  }
                  if(this.quiero=='PESO MX'){
                    this.total=this.cantidad*2.29;
                  }
                  if(this.quiero=='WON'){
                    this.total=this.cantidad*185.82;
                  }
                  if (this.quiero=='YUAN'){
                    this.total=this.cantidad;
                  }
                  if (this.quiero=='YEN'){
                    this.total=this.cantidad*20.83;
                  }
                  if (this.quiero=='PESO ARG'){
                    this.total=this.cantidad*118.15;
                  }
                  if (this.quiero=='FRANCO SUIZO'){
                    this.total=this.cantidad*.12;
                  }
                  if (this.quiero=='USD AUSTRALIANO'){
                    this.total=this.cantidad*.21;
                  }
                  break;

                  case 'YEN':
                    if(this.quiero==='USD'){
                      this.total=this.cantidad*.0066;
                    }
                    if(this.quiero==='EUR'){
                      this.total=this.cantidad*.0061;
                    }
                    if(this.quiero==='LIBRA'){
                      this.total=this.cantidad*.0052;
                    }
                    if(this.quiero=='PESO MX'){
                      this.total=this.cantidad*0.11;
                    }
                    if(this.quiero=='WON'){
                      this.total=this.cantidad*8.92;
                    }
                    if (this.quiero=='YUAN'){
                      this.total=this.cantidad*.048;
                    }
                    if (this.quiero=='YEN'){
                      this.total=this.cantidad;
                    }
                    if (this.quiero=='PESO ARG'){
                      this.total=this.cantidad*5.67;
                    }
                    if (this.quiero=='FRANCO SUIZO'){
                      this.total=this.cantidad*.0060;
                    }
                    if (this.quiero=='USD AUSTRALIANO'){
                      this.total=this.cantidad*.010;
                    }
                    break;

                    case 'PESO ARG':
                      if(this.quiero==='USD'){
                        this.total=this.cantidad*.0012;
                      }
                      if(this.quiero==='EUR'){
                        this.total=this.cantidad*.0011;
                      }
                      if(this.quiero==='LIBRA'){
                        this.total=this.cantidad*.00092;
                      }
                      if(this.quiero=='PESO MX'){
                        this.total=this.cantidad*.019;
                      }
                      if(this.quiero=='WON'){
                        this.total=this.cantidad*81.30;
                      }
                      if (this.quiero=='YUAN'){
                        this.total=this.cantidad*1.57;
                      }
                      if (this.quiero=='YEN'){
                        this.total=this.cantidad*.18;
                      }
                      if (this.quiero=='PESO ARG'){
                        this.total=this.cantidad;
                      }
                      if (this.quiero=='FRANCO SUIZO'){
                        this.total=this.cantidad*.054;
                      }
                      if (this.quiero=='USD AUSTRALIANO'){
                        this.total=this.cantidad*.0018;
                      }
                      break;

                      case 'FRANCO SUIZO':
                        if(this.quiero==='USD'){
                          this.total=this.cantidad*1.11;
                        }
                        if(this.quiero==='EUR'){
                          this.total=this.cantidad*1.03;
                        }
                        if(this.quiero==='LIBRA'){
                          this.total=this.cantidad*.88;
                        }
                        if(this.quiero=='PESO MX'){
                          this.total=this.cantidad*18.43;
                        }
                        if(this.quiero=='WON'){
                          this.total=this.cantidad*1495.86;
                        }
                        if (this.quiero=='YUAN'){
                          this.total=this.cantidad*8.05;
                        }
                        if (this.quiero=='YEN'){
                          this.total=this.cantidad*167.69;
                        }
                        if (this.quiero=='PESO ARG'){
                          this.total=this.cantidad*951.27;
                        }
                        if (this.quiero=='FRANCO SUIZO'){
                          this.total=this.cantidad;
                        }
                        if (this.quiero=='USD AUSTRALIANO'){
                          this.total=this.cantidad*1.70;
                        }
                        break;
          
                        case 'USD AUSTRALIANO':
                          if(this.quiero==='USD'){
                            this.total=this.cantidad*.65;
                          }
                          if(this.quiero==='EUR'){
                            this.total=this.cantidad*.60;
                          }
                          if(this.quiero==='LIBRA'){
                            this.total=this.cantidad*.52;
                          }
                          if(this.quiero=='PESO MX'){
                            this.total=this.cantidad*10.84;
                          }
                          if(this.quiero=='WON'){
                            this.total=this.cantidad*879.64;
                          }
                          if (this.quiero=='YUAN'){
                            this.total=this.cantidad*4.73;
                          }
                          if (this.quiero=='YEN'){
                            this.total=this.cantidad*98.61;
                          }
                          if (this.quiero=='PESO ARG'){
                            this.total=this.cantidad*559.33;
                          }
                          if (this.quiero=='FRANCO SUIZO'){
                            this.total=this.cantidad*.59;
                          }
                          if (this.quiero=='USD AUSTRALIANO'){
                            this.total=this.cantidad;
                          }
                          break;
    }
  }
}
