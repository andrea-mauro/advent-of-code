const input = ['GGVGlqWFgVfFqqVZGFlblJPMsDbbMrDMpDsJRn', 'LwzHtwdLHHwDrzPZzzsJbJ', 'wdLTBvSvHvZVGCjhfN', 'HsSSnZVHjjssZnJpSJjBHHWgQGcgqqQLQdQFqNgWgqGNDg', 'rmmRwrtfThtTrbCrGGGcLBDTqDBNQLdL', 'mwPrrbzPfwvbzhwMMnnjHnBjZlnzMM', 'gjjdMBgdqdTpJpBcjgRRRlqnvrqfnZtrtZDw', 'zHShWLhCszCWHVbVzQWCPtQvNZRwtfftfNnrnftlfR', 'PzPSssHbVhCLFMJFcMFJJMjdJw', 'ZqJdtpfpjmpJjpnwWdttTCDLLTQFNTzTzrcqrQqc', 'MsSlBGvBsSGGSlbGsCgggNTgzNLczFQNrNQVQcFzFF', 'sGHHSGllhvMGhSRGCjtjtjnjnnmHWpWWtJ', 'tMdjQlHPHsGjsCtsCpwwqfhfnnFMDMrpfD', 'SbNvWvBRJRWwFSgppgSrfg', 'RNcNbvzJRcVLRVzTRFLjdHCQttdZdPlHstPl', 'QWqgpdBflpHNCNWNHHPm', 'VVMbbJsLFVMhrMJMmRjFNHwHjjCTGSSRFj', 'mbMsZzsLmVhJZrcLcJhLMtnqvBnZdggplDffvlnlvnDn', 'prnNnsFnZpnBNdNtFrNnzNQQwTTQZqTHTQJQMwHDMDlZ', 'jgfgcSmbLmhmcPShghRdmwJTQjTlqGlJQJHqQqGHqQ', 'hRVhPfbCgbVggLVRSSmRhRPhrrrnCzzsvCvrnvFnNppsvBtd', 'QJLNDWSWQdLFFFhLdt', 'npHhHMsfsjpZjznRtmrMCdBwFBFrBdmt', 'HsjHqRRfnnHRsgfHffZspgzqDGQSWbQTDNGhQhSqNPhDWWbT', 'bsCmFDsGZCNsDmLDLZBSHSJTHnrZQMQSSQ', 'jqRpwvfqnnRQrftdBMHddB', 'phpchwpzjpvwRzwcsnlFsssPCCGzDlsD', 'rMqzVQfrfVZWZhTdRTQL', 'cgmtFtjFFJDDtFvSFRZdLlhpHZddmwTZWh', 'FbcSTtctcvFTJNgtJDGNPnCqMPMfMBfznGVsrMCq', 'wLJfGJJPZLBfwSLGHbqmhhDHHhFDzfhv', 'FsnpFjVjplTQCspNlCDbzhMMbqvMvsgmHDqb', 'lRdlTdTddllpRQFRltVVdFRcwrtrcWWcPrrWPrPSrZWLPc', 'VGVZhTppGTfPnJVJrFqbsmbSSshHqWqRHF', 'llzDCzlBLdNcCddlMMNBdCCtWHbFqFRRRsHjWtRwSWqbmjWm', 'NbcMBBvzzMQLCDBVTQQPVrPQPPZVPp', 'cdcgfmQdqlqhzzPjzfwpwf', 'GLBGBDvbvRzGwtnnmPpp', 'ZRCZBRFSRvLRLFvvbLLFQdHMTHTlQlNqNmqFlWdH', 'vzjzvHtcHvJcDStLLGSShCbbfF', 'MWFFTVZRMmMgdQdSQLwQrQwbGw', 'gFTmgmVZssRsWZRNzJlBHHnnJDvzNPlP', 'rHrvHpmHZfdGDDGGZd', 'cTlMsNhllMhGchNPCBlhMQgVDdgDSSWVbWVwRQwRSgbV', 'lnBjnNNTTMnCTcChPNhMvtzvFGLtJrjFtHHHzHJm', 'lgpdZZMmGVVzVZzt', 'HfHLrHqbPbzJJzRJJPTl', 'HsLWWbDqFrqlqfbsbDqDBncpgFmmvpnmmgpvdvjcdM', 'GpNVbTpJJNvMBMVvJTGvhnWQQScllnhhWlhVSznV', 'ZjswwHHLZzGnjWjSjl', 'sHdftLLtgLfwdtPmHtMbNpMTpNqGRbPvTqPv', 'sHSNNhNwsllGSGGlWSGWSsFrrVbQrdmFrVrrmnrHmrHr', 'QQMRZDDRcrcnmRcV', 'fJfCPMJCzTMZSGsWwsWBwqQf', 'HwQZZJsHdqqsdJQGRgCgVGgSqgpcGG', 'ljWWbnPhjBlGpCRCnScSGg', 'hrrztWlbPjltjMPSdJDZSsHttwsZwD', 'VzzbmzvpvNhvBDqc', 'QHSJSQGCwJCGrGQjjcgcBFhdgqdqFdDNNw', 'rCGJtZrHhhtLRsth', 'TMWwCLPpMTThrvtMRJjbjRvmJs', 'fDzcHFfSfFQfZzZRJbdmmqqssqtbSW', 'WWgGZglcllgPBBCBNVGPNr', 'wrwwhpTpbqhqrshrrfrFfwfzRJGdNJHNmcFzCCzCRJGzGR', 'vMggvjQvgPvQjVLMMPSZqWNJGCzcNGdcdzHPPzcmCzPz', 'qDZWvBZVfDhbTtrp', 'LpDvHdjVghnjbGrn', 'FBBBPwwlBlwSfFTWPHPWWhmgngmmnPnmbsngngbGrb', 'FwftBSCSfWCtwfVQDvHHCMVvdQLQ', 'ZrQpQlSpNlqQCVnQBmdDqmWDqmWWBDBB', 'HsZMsJvZzLMHTRwWhgDwmfDBgdhWdf', 'RZvTzJGzRjFrVNVjlQrS', 'mqjMwfqlSSPmSrlPhwhVpGRcppWcpcGRcGWv', 'ssJDJJNgZNDWrRWcRpvr', 'ZTsTnnsLJQgPnfMwmnMrfm', 'qsVBvZqWLdfbfvLj', 'mPNRgmHBBGQrCbSbrdfCCSbC', 'PlQTGcTTcgGFQQGPTGllpqMzwzpVJZwBMssZ', 'FWGcNRLRLhwJJQfV', 'nzbzlDBHSpTDbpDpzHwCqhqwJJghQqQMCCBw', 'JnzndzpmJFmNsrrFsc', 'gmRwwDwfnRDJgwZLFQFFNGNQrFBmFbbm', 'CCVHVWWThSrjVGvbNj', 'WpdqpplppHCWzlClMMTTZJcJsdscJLLdbDDfZDgL', 'VNtCCMDllpBqDvtdCczTSgjHlzGSHSGZTZ', 'hPFPsQhhFhLnbsRnLFssdzcHdsSHSSHgjzHG', 'QPWPQrPPmbdnbWLFPrrBVrVDBqqNMVwttDtBvD', 'PPNNRggwgRRgHBhDtwhTwbDs', 'SFGSFSMCJFMrcrCMSSsbtrTbbZhBvtHhrTHD', 'MFfSMpflQLQflfLjnLmddsLdddqq', 'RcgbcrrFscVrwZVCgVGGmHppNNndWnGdNqddqqNqND', 'jTlSTBSTjLTvlvjjPtvMLlhHnftphtDFNFqDnDHWNddn', 'QBMQvzzjzvJPjFQMmwZJrgmCCJVRVbbc', 'CzPJsWCpvsNszsJsNsHlDhMrrJGjhrRVhRGgDDjG', 'tFFdbqFLFdwctQdfVhjRRghTcrjVRTDW', 'bwQtFLdLBdFmwnHnWHPBNnHCnp', 'CNTstGNslRRRstlmNmmTZZqfFwtqgwqgfBPSwSWwqgWq', 'hpDbcHbpSrcgqqzhhWVfqg', 'DDcLDjbMjCSsZRNlMv', 'MhHMCMNbzbMHlcqmGmrmWc', 'tnPggdZPBPgdtttJpdnwVBnmqQcvlQrQlfGqmfWffBcqWD', 'VPPwPPLPwLGFGLzCbG', 'rqBcBmjHTGfPbcVgPG', 'dlDpsdshzlldlDvsWlWvLQbQBbfLFLbPvbBGQBgG', 'BlBznnRWzlphphBnhZjZtNNCNmrNqjCqHwHN', 'mQBvmvBmmLJvvrLtttQrfhGlcRGfRhVGWJVChlRG', 'MzPswTsbTPPsNgMNszgzMpbMfcRcGflVGRfWSpFRlWWWFhcC', 'bcPsTbgbbTTwNZzTZzvdjdjtQQndZvdrvdmZ', 'hQzTQJFFZJrcdcdZFFrGFSVWVRWRwRgRHVMWDCDSWc', 'lPmpNBnnnsNBnLnfbfnCDWMvwRvDCCMPwwHWvM', 'HpjmffNlnqqhddTddFZjGJ', 'BwsLFFbHLbVCSCSFbsbFLsJbqnTtZrRMHTZtrTrZTcRRRRTq', 'lGhNhpPmmhpztZTBrcpjRqpB', 'QPzdfzBQNgFJSCwsdLbS', 'ZsZsSBTgffSCqSSfrMnnMwjqmqmnnnqwMm', 'bbPPbzVclcPzGNlvzVtmnDBnQmtnQLBjJVLn', 'zPFGplGGvdPbHplcbzzvdlNBTThgRpCTCTfhfsCCsSRZhR', 'CVLSVCLVZRsHcnzSRpdZZRCdPlmcMWDDlPNqMqtDMmqPMlDt', 'TBnGjfQrQJjhfWlPPmPQDNlmlP', 'fjhhGvjvvrTTBhvTBTbvGVRLzVnbSRZpHddspHRzLs', 'DDtWjfRfftWMLzSQjzzhWjjwRVPHqFbBbZHVwZBFvFwZvZ', 'JGllgCJlJsrCGPrCNTPdslvZVVNVbvBqNbbpbbFHpBwZ', 'CcPdnCdmCJjfcftWhtSL', 'pgpfddDGHWzDNGNGpRCQjCTFHZZQFQjcRT', 'bJlhqmMvnlrRQFtTthPVhZ', 'lvbJrlJMBwfzGNTddB', 'wpbJGGZpsjvtdWvGWF', 'HqqhBhBqhhNQHTSHqqNzRHVPvTvddWrjtrjFvrvdTdVP', 'NRLCRzlqHQtNRBLzQllhhZcgbggwmLDZpsgssDpwwD', 'pDzFzJFcVMcWJFJFzpLBsqWLZssshsGLGbsS', 'wqHqfvnfrRwQtdQRthhBbBbZLhPLnBTGsh', 'CfQqlqvtfHNvMVmzmmMCFDMc', 'GcgpNHvcSNvpSLphdhsLdQTsdWThhQ', 'wwzttPrrhQswdhnT', 'tjJjMJRbRbjztmjtjbgcRsNlgglHpDFSlSvg', 'VVLvLqqPVlvcqLLdwLbHpzcHSsbRJppHbHpF', 'CfjjCNGmMWhWjhWHWb', 'ZmGZffggrDqZvZtlbTqL', 'TTmmhvBvvHWzHpsPpstpLVdwwsLb', 'qflfFgNctNcCnCCNDnfFFNDwrslwZbPswwZbJLJZbrlPLL', 'FgQDDcncStCgtqccjSDTHWMThvhTQMBQhWvWRG', 'SqhVghPccSBhgSBqWBFNQNsHQHMjCCQQWCwQHN', 'fLZftnlttcbbtZbZlpZtttQjwsCQjRwwRDQspMRMNNQs', 'TfLtvbJtZmlbTTTtlJbFvVqPSgBdPqPhFSGBcd', 'pPPNDptcqtpcDztLDhhngnnJgJTmJwNnwm', 'HVVCsSClHGBCHslWHbSCGGVngTrJwnnJnQRRBrhQhgJhdm', 'WTWWWsvVlvGbWCFvjDftPpjqZLLtDz', 'wWclwtDwRvflvffB', 'sMMsGdsSTMrJZNqczfdvhvnzCnfv', 'rspppMjMspSTSMpgLjcPFmwPLmPHwb', 'tCdSMHtHtRFHdWSSJQSgrrrnghTNJN', 'BGfcvDsfvsqcvqfGvfGnNLhggBNQJNJQmpgQJm', 'sGfQDPDZzfDZzclwDzwsDlfjtbdHClFRCMWjbMFMRFWbdj', 'pJNCcvqCccsVvFCpqsmvWJfCBWgSzBBRrrBRDDgDrSbbgQbQ', 'TMLnLjjffwfwGdjQjDDBjBrDtztRSb', 'MdPLGhHnMZhlPHHTFfZvVCpmmmcFcVFC', 'SwFMfCMRCdQDdMbmdFfdbbnlcVncVCcgLqWcNNnCcWlW', 'hPjQzzhGzhpPrtPJPpPHrVgnqVVncVVnNHlqVnncNB', 'ptjGrptztpthtrtJJhTsGwFDZZDQmSdfZSwsRZSwfZ', 'rSSWWCWrdllHWpjcnFNnRCNjQp', 'bGwwJqGVGbGJVVhgbBgttGmBQjFsMjpMcMnnMBcQFNnsssvv', 'bfthwmfJfgwwmmwZqVJPHNHSZHWzSlDPrdDdSH', 'nmJccvclcbwmlbbvVbvsHwJJPCPNCNPnLBhrBPPLBhLhBgBP', 'MdRGtdDRTqWDMqtMDtQDRWSdLLBsrhLgBCgrgCgNNLPBfNMf', 'dRZQdDdRRSQWGsjZmwzjmlzsZH', 'PBGGMrTQTrTBpPQpLpSlwjwfjtlnfwbmGttw', 'fCsJCWJcvRCtwwjbCl', 'NsqcsfcvDHFVDJvdLQTrpdTTzTPpHr', 'rltrwsBTlrfGZggGBLGGNN', 'jhMnRQJVphMnbhvQjDZNqqZDNTNHZVHGHq', 'MRvbhQRQQChpvbjvMSvQnMcsFsfwwmlCwFwWcTWwrmPc', 'DDvLLLBnvrzvbvbmtv', 'TMwRjTRMGCwGGwrjQQnmrQrrQdhZ', 'MJPFHFTwgCGqGqgJMGDfSWcsnBSccgVDlnpW', 'flzVzNrdLNLJzrGlfdlzjrQDgFTpDgDmmmgFmqFDQjQh', 'CbnBcsZnPZVSnwvVsZbRhhBDpgFphgmgDgTppq', 'ZWnsWSnncSZsntZCbsswwJMzdLzlMdNMLtMVfrllMt', 'ZffSgNfgJgGCHZcZrpHrNJTLhqvSLTqQnvVTLvzvLTjV', 'tWFtHMwlBlDqjjzjnqvvlV', 'DRMPDtWHPFDBFFwWMFBmFRPgZpJfsffNGJNrGcsprrsmfg', 'wRZRmpZmlPqZjzGrdrGq', 'bBhQQFPQbPDVNzVNzdGWNdrf', 'QFbcDcDbLHgHBPDFRsSSMtmvRttMpCLS', 'MpWJVVJMcWvpRShcwpLGflmqzSfNdfNLdQzN', 'CDBTtCgtbjgCRrBrPBTQqzflNqjGdLzzmqffzq', 'rFgnnBbttDTPtHCDPrPMnpwVJhJvMZvpMvppRZ', 'sWTTmpsfsWppPTTsTVZWHVVZNvVcdcJvdN', 'DjjBzjhRHvvvSzdc', 'rMBjjrjbjrGDlgMlMrGjBgRLPTTwHMsfnFwFQPMPMnmFFm', 'QRRbDjjmPzNQwFDNmrQmzCbVHrMhBVrJLJJfMGGLtfJBHh', 'dsWcsqqWSWvnWnWcWGPJLBqhLBqGhBJHHH', 'ZWnPWgWgPnlbCDDwmmDbRZ', 'nfPqqfLqQnfHBSqnzztQjVmjfGRWJNGRWsJWJfmJ', 'TTMlMMlFDMGVGRsVJH', 'CbDbFDbvgTFFwgTDlDprhlPSqBzSnPdLPtPPHgznQqBQ', 'fJmWVfHqjfjhZCQZ', 'NcNzBNvgszQmzjnthZQC', 'LsLsgBNFmFgTFgGBBgcdMdvPDPDJWrlpVbGpJWqHDlHJHD', 'SllDdvzgdFDdlPJvbFDDSzFScPTRTNcwfZRwRhcwwNnRZTtf', 'WBpWBCLGVpLjHrHGGVhZNwcTVcNhVnRcNZ', 'LHLQLspHWQGpWCHnBvdzDJFlqvdsqgSgqS', 'GcTctDMjMhpMDRjLsMMsfDWFfdPCFNbnCPnvCPgW', 'JmvwqlBwnmfdFPFP', 'SvZqHSZqqHZZZBlllBwSwsRsMHpLjpLsMGtsMspGRT', 'ClLnCLfClLVllfLLcQjLBCfCmSHVsttsmtsVStDNVdppdsSp', 'PFrRMbWqMRwFRqRSqwqvMvMsGtgsdmssrgNtdmpNdDGgdt', 'bwJbPWPwFFPFSczCZzZZCcfjBJ', 'MwmBmzwJQTcTmfPVfZPwhhwHPH', 'jlnrglFLvbrGRFGnvFZdNNFfPZddPThVhdPH', 'RjbjpgbnLGvpLgzBqBpmWmmzqTMS', 'FnsSpttPnPbNCFDtsPnFHQZTQZgcwgDDTfrfTHMZ', 'mRjzRzlvBvhjZrQmMMwfZZNN', 'ldzddlzLRlRWdhjdRLjhRWtJbJbNtJJpJPbCbGCWNG', 'wBwmNZBTmzzcVcmpzZqdMgPjnLSVlPgDPdbMdg', 'flJvGtHffHDddddbHjnb', 'RstrhfrhhRGFQtRhtftvQhvFZpsmpWwNlWqcWTccBNWswqNp', 'DPWhbzDlQLLlQbLDlLhPhLFNNJqCFGqnNJCCSCnGPnGN', 'wvwjtvtdwfssvSJgFFvGGSCFcp', 'mtdrZwwJsrtddrHRtZWbVThLlBzVTzhHQWhB', 'TsRRWctsTJMQZllggc', 'zDvhpbprgGvpvVlVQlZpQMJVlQ', 'rrrvFvGCDhDSrrrvChCgSstBNTSftWBjTdfWBN', 'JJdssBcLVGrgbBHWrH', 'QZTptvmvmlZpRDlMMMZCQvnjjFnrjWGFbjnrnFGWgZrz', 'TMRplDMggtwlppTlvhsJJqdcqwVPSSNcLd', 'JjTCCrcRvccPLmMP', 'NfGFPZlNnwBfPlbbbQZGqLHgzLghSmMBzSgvzmDMhv', 'ZfbnNQpQnZGlGlGpWTddjdTJdpRPTrCj', 'gWLblMMggdWsdRJlblMRMMqWDvPvcPPPccJPJVTZVZThmcDP', 'rQFfGfrCHrjnrtNTcPShTSPvvVLtmm', 'fQrCfLrpLHnCHwslqzqsslswzqRW', 'zpJtGlJPMPTlTjGJCDGCDljpdnvhhWnZnZnDwwmvnWDWWvdd', 'sHrVrSrRRRLNgLVBqSsZmWwvwcvwZjmwngmdbn', 'QsQQBrrLHTjPpTQzzP', 'JDlzHHzzptRDmbTMrrVQ', 'dRRNqnCBnmrQsVQQ', 'wFPCBNFgwjPwhgFNztftpJRPpzRvvHtZ', 'DlBhrDBPPwMWwhWchW', 'ntSqbbSJFJNqzVzjCfMvfSlSRWccRL', 'mVlHtNVtqldbJVmNHmdTTBBgrQQgGsPQdrDgsP', 'HWHNbBgvNLdcvQMnSf', 'wqqqVPDPhqwszFwrrszFfMdWthLcMdfhthSQfJSt', 'qVPVwTzFwFDpDrPDzDPFDPlCHjBGjTmZGjbWWGZBRTNjjH', 'GVgdWjllSqgjdgHqqlfmhwcpwCzhvZwMcScv', 'nsJQbLRQsNnzQDQQPPBbRBRhfZwpZcvwpvvmLCcvpcmfMM', 'DRJtnnRbBBnPztsrPzRBPbsFFHqqVrqggjFWqrgWjTGgFq', 'hhZJQPJFHGGlcWWslpNN', 'VwwwJjvwMtrCnwjDNDzlfscWszWW', 'nVStCrMqbVwqVqSqwnLPhTJFdRgJHZSFRLTP', 'vPgMbbRhhvMvNjjLWsWQsHQmHwBrmmBzww', 'tFctDnVFpppHVBTdzdTQwl', 'FtSFqSptfJCqqJStZCqDpDJMhvLLgLMgQgjgGZgGgMPLZg', 'zwsWgSGWLSVhPWhtLgLWhPVNQTmDrDQttZpdQtdpQDDQZQ', 'fjCHcvvjMDrppCQpVV', 'VMqRnVJMVLPzbRWhGh', 'mjRmzQlzDzNHWwDZ', 'FBfJBGqnnpfSVGnpJbJVfNtCsJHWZvrsNJCZrCNsvN', 'fZPBnfPqSBqdfpFbVnVSjgdcLLgRLjmgRhLLghlR', 'FSFnTcppdQtnnDhtzDfg', 'ZLGVmBLBVwZCVjjGqGhVwVVgzzbMDtNNvszMmMffNDDvtM', 'VZPJjBZVqBZZBjqwVqllpSTphhQFPShWSQcW', 'hTRdcLrCLgplLvBFGvlL', 'nZDZqzbDbDzRZtVNDzDWGwslsllBFpnlpGvJssFG', 'zbqjNWQVmVPrrRjRdRhS', 'VpNCbVHlHHZfflVfmchctqFcqQQjZmZM', 'WDSRGgsSvgJSRrnWgqQhmjBqmhqrtLqmQm', 'znSGTgDJnsDGzgwCwlpbCNwHzVtl', 'sTTTrpHFFFqTnQbbvfJdDzHHDLVV', 'CjMtgMgRvbPfjjvB', 'mhMvlhhWClvqshNTQQqsNN', 'tWFtFBzbwdFrpmdhdm', 'qTqDjJjJQQqMjTDLJjNqNqPNdmpcSmhdmhhmcrWZpdPGddcc', 'RjNQLJNTTJDDJRHHjQqnMWtlvvVvbtBvRVzgzgwgVg', 'CGdQjwdJrbBmpmZZZlRWcb', 'NgtMPVstgSzBLzhgzgLgDRlcmDWRmlZvcSmDSvvp', 'LhNsgPPLFPPsNzMhhVzPsGJBFqwQGfnqfQjdGdGfwr', 'CNbNdbzjCZpPNzjmzjsCMRJvnnMRGnsvJGRs', 'wrtdwTLWFcFWdFgwRRsnJGnGfTGJfMsq', 'FttcwgBtgVLgPldQSNZBzBpz', 'DjRZrrRmttRFDvDrFTZsnWnHVSTSSJVZJH', 'dNNhLqlLLqdCzfMMlCfSncTVVWcHdcVsVdSVnT', 'QqppMfzMfqWCwbRQrwFrrttQ', 'dwGjHrtjsdhfCHnPSpfMfDPpPDWS', 'lmNzzlLbFqcqNgzpWMSvbbvDQDGWDp', 'LBmglgmqBqmrwCGhCjVtBC', 'tvHgWZCCprlgpWglCtjPhLmPmhVdJFSzVzdJVmmQ', 'fBnTTnNNBnwfnNqcBbBBTbGJQQJhSSdQJJsmdJFSQGSmVV', 'cMcDwFbRfFRlHCRCZrrp', 'ZFWmgghzBgwgjWBzjzmRWWMmsVwnVrsdVdwNrrpnnVrPCnCP', 'GLLbtGqllctqvGJvSlQbJGsPnVdsdpsTPLsVppBCTVss', 'tJBStGSvctvDDfczmRgRZjzDjZmgzH', 'FMrLmsQQSWzCZBhpQJTQQZ', 'dPPVncVvPBJDCPhwJD', 'fvHbbVHvqnvvvBzgLbbGGmrbMr', 'mrZzrzqDrhZqDddSFrCGLLLPQPQBJPJJBnQq', 'TgbpGblWlMsjgWlgMfpNRgbRHHBnHHHtLpCJPCPBnBLJtQQL', 'sbTlblTlvRbbGblbFcdDzccVcDVvzzzd', 'zMzfzlGwSBMMSCMzhsPgfcPcfcbhjQPt', 'FHHqJVdJmFmdVrJdJppthscjGtqRPRcccgcQbR', 'rvNJJpLrvvLnJvNFFvZZZBWznBWGSDCMnCwz']

function findDuplicate(itemListString) {

    const itemList = itemListString.split('')

    const len = itemList.length/2
    const first = new Set(itemListString.substring(0, len).split(''))

    return itemListString.substring(len).split('').filter(el => first.has(el))[0]
}

function findGroupBadge(itemListString1, itemListString2, itemListString3) {

    const first = new Set(itemListString1.split(''))
    const second = new Set(itemListString2.split(''))

    return itemListString3.split('').filter(el => first.has(el) && second.has(el))[0]

}

function calculatePriority(item) {
    if (item === item.toLowerCase()) {
        return item.charCodeAt(0) - 96
    }

    if (item === item.toUpperCase()) {
        return item.charCodeAt(0) - 38
    }
}

function sumDuplicatePriorities(input) {
    return input.reduce((acc, el) => {
        return acc + calculatePriority(findDuplicate(el))
    }, 0)
}

function sumBadgesPriorities(input) {
    let sum = 0
    for (let i = 0; i <= input.length - 3; i = i + 3) {
        sum = sum + calculatePriority(findGroupBadge(input[i], input[i+1], input[i+2]))
    }
    return sum
}

console.log(sumDuplicatePriorities(input))
console.log(sumBadgesPriorities(input))